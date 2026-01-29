import { chromium, Browser, Page, Frame } from "playwright";
import * as fs from "fs/promises";
import * as path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Define automation steps
enum AutomationSteps {
  NAVIGATE = "navigate",
  START = "start",
  PARSE = "parse",
  FILE = "file",
  LEVELS = "levels",
  README = "readme",
  COMPLETE = "complete",
}

async function navigateToGame(page: Page): Promise<void> {
  console.log("Navigating to Queens game...");
  await page.goto("https://www.linkedin.com/games/queens/");
}

async function startGameIfNeeded(page: Page): Promise<void> {
  console.log("Checking for start button...");

  await page.waitForLoadState("domcontentloaded");

  const iframeHandle = await page.waitForSelector(
    "iframe.game-launch-page__iframe",
    { timeout: 15000 }
  );
  const iframe: Frame | null = await iframeHandle.contentFrame();

  if (!iframe) {
    console.log("Could not find iframe");
    await page.screenshot({ path: "debug-iframe-failure.png" });
    throw new Error("Failed to access game iframe");
  }

  console.log("Iframe found, waiting for content...");

  try {
    let startButton;

    try {
      startButton = await iframe.waitForSelector(
        '.launch-footer__btn--start:has-text("Start game")',
        { timeout: 5000, state: "visible" }
      );

      if (startButton) {
        const buttonText = await startButton.textContent();
        console.log(
          `Start button found with text: "${buttonText?.trim()}", clicking...`
        );
        await startButton.click();
        console.log("Start button clicked, waiting for game to load...");
        await iframe.waitForTimeout(3000); // Wait longer for game to fully load
      } else {
        console.log("No start button found, proceeding...");
      }
    } catch (error) {
      console.log("Start button not found or not visible, proceeding...");
    }

    try {
      const dismissButton = await iframe.waitForSelector(
        ".artdeco-modal__dismiss",
        { timeout: 5000, state: "visible" }
      );
      if (dismissButton) {
        console.log("Tutorial modal found, closing...");
        await dismissButton.click();
        await iframe.waitForTimeout(1000);
        console.log("Tutorial modal closed");
      }
    } catch (error) {
      console.log("No tutorial modal found or failed to close, proceeding...");
    }

    // Wait for the game grid to be ready
    await iframe.waitForSelector(".queens-grid", {
      timeout: 10000,
      state: "visible",
    });
    console.log("Game grid is ready");

  } catch (error) {
    console.log(
      "Error in start process:",
      error instanceof Error ? error.message : String(error)
    );
    await page.screenshot({ path: "debug-start-failure.png" });
    console.log("Proceeding anyway...");
  }
}

interface ParsedGrid {
  size: number;
  cells: Array<{
    row: number;
    col: number;
    color: string;
    shape: string;
  }>;
}

async function parseGameGrid(page: Page): Promise<ParsedGrid> {
  console.log("Parsing game grid...");
  
  const iframeHandle = await page.waitForSelector(
    "iframe.game-launch-page__iframe",
    { timeout: 15000 }
  );
  const iframe: Frame | null = await iframeHandle.contentFrame();

  if (!iframe) {
    throw new Error("Failed to access game iframe for parsing");
  }

  // Get grid data from the DOM
  const gridData = await iframe.evaluate(() => {
    const grid = document.querySelector("#queens-grid") || document.querySelector(".queens-grid");
    if (!grid) {
      throw new Error("Could not find queens-grid element");
    }

    // Get grid size from CSS variables
    const gridElement = grid as HTMLElement;
    const style = gridElement.getAttribute("style") || "";
    const rowsMatch = style.match(/--rows:\s*(\d+)/);
    const colsMatch = style.match(/--cols:\s*(\d+)/);
    
    let size = 7; // default fallback
    if (rowsMatch && colsMatch) {
      const rows = parseInt(rowsMatch[1]);
      const cols = parseInt(colsMatch[1]);
      if (rows === cols) {
        size = rows;
      }
    }

    console.log(`Grid size detected: ${size}x${size}`);
    console.log(`Grid style: ${style}`);

    // Color mapping based on aria-labels we found
    const colorMap: { [key: string]: string } = {
      "0": "lavender",     // Lavender
      "4": "gray",         // Light Gray  
      "5": "coral",        // Vibrant Coral
      "6": "yellow",       // Lime Yellow
    };

    // Parse all cells
    const cellDivs = Array.from(grid.querySelectorAll(".queens-cell-with-border"));
    const cells = cellDivs.map((cell, index) => {
      const row = Math.floor(index / size);
      const col = index % size;
      
      const cellElement = cell as HTMLElement;
      const classList = Array.from(cellElement.classList);
      const ariaLabel = cellElement.getAttribute("aria-label") || "";
      
      // Get color from cell-color-X class
      let color = "default";
      for (const className of classList) {
        const colorMatch = className.match(/cell-color-(\d+)/);
        if (colorMatch) {
          const colorIndex = colorMatch[1];
          color = colorMap[colorIndex] || `color-${colorIndex}`;
          break;
        }
      }



      // Get shape - queens are circles, empty cells are squares
      let shape = "square";


      // Additional shape detection from classes if needed
      for (const className of classList) {
        if (className.includes("circle")) {
          shape = "circle";
        } else if (className.includes("triangle")) {
          shape = "triangle";
        } else if (className.includes("diamond")) {
          shape = "diamond";
        } else if (className.includes("star")) {
          shape = "star";
        } else if (className.includes("heart")) {
          shape = "heart";
        }
      }

      return {
        row,
        col,
        color,
        shape,
        classes: classList.join(" "),
        ariaLabel,
        cellIndex: index
      };
    });

    return { size, cells };
  });

  console.log(`Parsed grid: ${gridData.size}x${gridData.size} with ${gridData.cells.length} cells`);
  console.log("Sample cells:", gridData.cells.slice(0, 5));


  return gridData;
}

function generateLevelContent(levelNumber: number, gridData: ParsedGrid): string {
  const { size, cells } = gridData;
  
  // Create color mapping from parsed colors to region letters
  const uniqueColors = Array.from(new Set(cells.map(cell => cell.color)));
  const regionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  const colorToLetter: { [key: string]: string } = {};
  const regionColors: { [key: string]: string } = {};
  
  // Available colors pool - ensuring unique colors for each region
  const availableColorPool = [
    'altoMain',
    'anakiwa', 
    'bittersweet',
    'celadon',
    'chardonnay',
    'lightWisteria',
    'saharaSand',
    'emerald',
    'halfBaked',
    'lightOrchid',
    'periwinkle',
    'turquoiseBlue'
  ];
  
  // Preferred color mapping for known colors
  const preferredColors = {
    'lavender': 'altoMain',
    'gray': 'chardonnay', 
    'coral': 'lightWisteria',
    'yellow': 'saharaSand',
    'default': 'altoMain'
  };
  
  // Track used colors to ensure uniqueness
  const usedColors = new Set<string>();
  
  // Map colors to letters and assign unique color names
  uniqueColors.forEach((color, index) => {
    const letter = regionLetters[index];
    colorToLetter[color] = letter;
    
    // Try to use preferred mapping first
    if (preferredColors[color as keyof typeof preferredColors] && 
        !usedColors.has(preferredColors[color as keyof typeof preferredColors])) {
      const preferredColor = preferredColors[color as keyof typeof preferredColors];
      regionColors[letter] = preferredColor;
      usedColors.add(preferredColor);
    } else {
      // Find next available unique color from pool
      const nextAvailableColor = availableColorPool.find(colorName => !usedColors.has(colorName));
      if (nextAvailableColor) {
        regionColors[letter] = nextAvailableColor;
        usedColors.add(nextAvailableColor);
      } else {
        // Fallback if we run out of colors (shouldn't happen with 12 colors available)
        regionColors[letter] = `color${index}`;
      }
    }
  });
  
  // Generate the imports
  const importedColors = Array.from(new Set(Object.values(regionColors)))
    .filter(color => !color.startsWith('color')); // Filter out fallback colors
  const imports = importedColors.join(',\n  ');
  
  // Generate colorRegions array
  let regionsArray = '';
  for (let row = 0; row < size; row++) {
    const rowCells = cells.filter(cell => cell.row === row);
    const rowData = Array(size).fill(null).map((_, col) => {
      const cell = rowCells.find(c => c.col === col);
      const color = cell ? cell.color : 'default';
      return `"${colorToLetter[color] || 'A'}"`;
    });
    
    regionsArray += `    [${rowData.join(', ')}]`;
    if (row < size - 1) regionsArray += ',';
    regionsArray += '\n';
  }
  
  // Generate regionColors object
  let colorsObject = '';
  Object.entries(regionColors).forEach(([letter, colorName], index) => {
    colorsObject += `    ${letter}: ${colorName}`;
    if (index < Object.keys(regionColors).length - 1) colorsObject += ',';
    colorsObject += '\n';
  });
  
  return `import {
  ${imports}
} from "../colors";

const level${levelNumber} = {
  size: ${size},
  colorRegions: [
${regionsArray}  ],
  regionColors: {
${colorsObject}  },
};

export default level${levelNumber};
`;
}

async function createLevelFile(
  levelsDir: string,
  levelNumber: number,
  generatedContent: string
): Promise<void> {
  console.log("Creating level file...");
  const levelFile: string = `level${levelNumber}.ts`;
  await fs.writeFile(path.join(levelsDir, levelFile), generatedContent);
  console.log(`Level file created: ${levelFile}`);
}

async function updatePreviousLevelFile(levelsDir: string, levelNumber: number) {
  if (levelNumber <= 1) return; // No previous level to update
  
  console.log("Updating previous level file...");
  const levelFile: string = `level${levelNumber - 1}.ts`;
  const previousFileDir = path.join(levelsDir, levelFile);
  
  try {
    let levelContent: string = await fs.readFile(previousFileDir, "utf8");
    levelContent = levelContent.replace("\n  isNew: true,", "");
    await fs.writeFile(previousFileDir, levelContent);
    console.log(`Updated previous level file: ${levelFile}`);
  } catch (error) {
    console.log(`Previous level file ${levelFile} not found or could not be updated`);
  }
}

async function updateLevelsFile(
  levelsFile: string,
  levelNumber: number
): Promise<void> {
  console.log("Updating levels file...");
  let levelsContent: string = await fs.readFile(levelsFile, "utf8");

  // Add the new import statement at the end of the imports block
  const importStatement: string = `\nimport level${levelNumber} from "./levels/level${levelNumber}";`;
  const importRegex = /import\s+level\d+\s+from\s+"\.\/levels\/level\d+";/g;
  const importMatches = levelsContent.match(importRegex);

  if (importMatches) {
    const lastImport = importMatches[importMatches.length - 1];
    const lastImportIndex =
      levelsContent.lastIndexOf(lastImport) + lastImport.length;
    levelsContent =
      levelsContent.slice(0, lastImportIndex) +
      importStatement +
      levelsContent.slice(lastImportIndex);
  } else {
    levelsContent = importStatement + levelsContent;
  }

  // Update the export statement
  const exportMatch: RegExpMatchArray | null = levelsContent.match(
    /export\s+const\s+levels\s*:\s*{[^}]*}\s*=\s*{([\s\S]*?)}\s*;/
  );
  if (exportMatch && exportMatch[1] !== undefined) {
    const existingLevels = exportMatch[1].trim();
    let newLevels: string;

    if (existingLevels) {
      const levelsArray = existingLevels
        .split(",")
        .map((level) => level.trim())
        .filter((level) => level);
      levelsArray.push(`level${levelNumber}`);
      newLevels = levelsArray.map((level) => `  ${level},`).join("\n");
    } else {
      newLevels = `  level${levelNumber},`;
    }

    levelsContent = levelsContent.replace(
      /export\s+const\s+levels\s*:\s*{[^}]*}\s*=\s*{([\s\S]*?)}\s*;/,
      `export const levels: { [key: string]: Level } = {\n${newLevels}\n};`
    );
    await fs.writeFile(levelsFile, levelsContent);
    console.log("Levels file updated successfully");
  } else {
    throw new Error("Could not find export statement in levels.ts");
  }
}

async function updateReadme(
  readmePath: string,
  levelNumber: number
): Promise<void> {
  console.log("Updating README...");
  try {
    let readmeContent: string = await fs.readFile(readmePath, "utf8");
    const levelCountMatch: RegExpMatchArray | null = readmeContent.match(
      /## Levels Added \((\d+)\/(\d+)\)/
    );

    if (levelCountMatch && levelCountMatch[1] && levelCountMatch[2]) {
      const newCount: number = parseInt(levelCountMatch[1]) + 1;
      const totalCount: number = parseInt(levelCountMatch[2]) + 1;
      readmeContent = readmeContent.replace(
        /## Levels Added \(\d+\/\d+\)/,
        `## Levels Added (${newCount}/${totalCount})`
      );
      readmeContent = readmeContent.replace(
        /- \[x\] 21-\d+/,
        `- [x] 21-${totalCount}`
      );
      await fs.writeFile(readmePath, readmeContent);
      console.log("README updated successfully");
    } else {
      console.log("Could not find level count pattern in README.md");
    }
  } catch (error) {
    console.log("README update failed:", error);
  }
}

async function addLevelFromSource(
  levelNumber: number,
  headless: boolean = true,
  stopAt?: string
): Promise<void> {
  const browser: Browser = await chromium.launch({ headless });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 1200 },
  });
  const page: Page = await context.newPage();
  const stopStep = stopAt?.toLowerCase() as AutomationSteps;

  try {
    // Step 1: Navigate to game
    await navigateToGame(page);
    if (stopStep === AutomationSteps.NAVIGATE) return;

    // Step 2: Start game
    await startGameIfNeeded(page);
    if (stopStep === AutomationSteps.START) return;

    // Step 3: Parse game grid
    const gridData = await parseGameGrid(page);
    console.log(`Grid parsed successfully: ${gridData.size}x${gridData.size}`);
    if (stopStep === AutomationSteps.PARSE) return;

    // Prepare file paths
    const projectRoot = path.resolve(__dirname, "..");
    const utilsDir: string = path.join(projectRoot, "src", "utils");
    const levelsDir: string = path.join(utilsDir, "levels");
    const levelsFile: string = path.join(utilsDir, "levels.ts");

    await fs.mkdir(levelsDir, { recursive: true });

    // Step 4: Generate and create level file
    const levelContent = generateLevelContent(levelNumber, gridData);
    await createLevelFile(levelsDir, levelNumber, levelContent);
    if (stopStep === AutomationSteps.FILE) return;

    // Step 5: Update previous level file and levels file
    await updatePreviousLevelFile(levelsDir, levelNumber);
    await updateLevelsFile(levelsFile, levelNumber);
    if (stopStep === AutomationSteps.LEVELS) return;

    // Step 6: Update README
    const readmePath: string = path.join(projectRoot, "README.md");
    await updateReadme(readmePath, levelNumber);
    if (stopStep === AutomationSteps.README) return;

    // Step 7: Complete
    console.log(`Level ${levelNumber} added successfully from source!`);
    console.log(`Grid size: ${gridData.size}x${gridData.size}`);
    console.log(`Total cells parsed: ${gridData.cells.length}`);
  } catch (error) {
    console.error(
      "Error:",
      error instanceof Error ? error.message : String(error)
    );
    throw error;
  } finally {
    await browser.close();
  }
}

// Function to show available steps
function showSteps() {
  console.log("Available automation steps:");
  Object.values(AutomationSteps).forEach((step) => {
    console.log(`- ${step}`);
  });
}

// Parse command line arguments
const argv = yargs(hideBin(process.argv))
  .option("level", {
    type: "number",
    description: "Level number to add",
  })
  .option("headless", {
    type: "boolean",
    default: true,
    description: "Run in headless mode",
  })
  .option("stop-at", {
    type: "string",
    description: "Stop automation at specific step",
  })
  .option("show-steps", {
    type: "boolean",
    default: false,
    description: "Show all available steps and exit",
  })
  .check((argv) => {
    if (!argv["show-steps"] && typeof argv.level !== "number") {
      throw new Error(
        'Argument "level" is required when not using --show-steps'
      );
    }
    return true;
  })
  .help().argv as {
    level?: number;
    headless: boolean;
    "stop-at"?: string;
    "show-steps": boolean;
  };

// Main execution
async function main() {
  if (argv["show-steps"]) {
    showSteps();
    return;
  }

  console.log(`Starting script with level: ${argv.level}, headless: ${argv.headless}`);

  // We know level exists here because of the check above
  await addLevelFromSource(argv.level!, argv.headless, argv["stop-at"]).catch(
    (error) => {
      console.error("Failed to add level:", error);
      console.error("Stack trace:", error.stack);
      process.exit(1);
    }
  );
}

main();