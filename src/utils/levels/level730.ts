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

const level730 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "C"],
    ["D", "D", "E", "A", "A", "E", "B", "C"],
    ["D", "F", "E", "A", "A", "E", "B", "G"],
    ["D", "F", "E", "E", "E", "E", "G", "G"],
    ["F", "F", "F", "E", "E", "H", "G", "G"],
    ["F", "F", "H", "E", "E", "H", "H", "H"],
    ["H", "H", "H", "E", "E", "H", "H", "H"],
    ["H", "H", "H", "H", "H", "H", "H", "H"]
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

export default level730;
