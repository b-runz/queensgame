import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
  emerald
} from "../colors";

const level759 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "C"],
    ["D", "B", "A", "A", "A", "B", "B", "C"],
    ["D", "B", "B", "A", "B", "B", "C", "C"],
    ["D", "D", "B", "B", "B", "C", "C", "E"],
    ["D", "D", "F", "B", "C", "C", "E", "E"],
    ["D", "D", "F", "F", "F", "G", "E", "E"],
    ["D", "D", "F", "F", "G", "G", "H", "H"],
    ["D", "D", "F", "G", "G", "G", "H", "H"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: lightWisteria,
    G: saharaSand,
    H: emerald
  },
};

export default level759;
