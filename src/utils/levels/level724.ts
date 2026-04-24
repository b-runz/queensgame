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

const level724 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "A", "A", "A", "A"],
    ["B", "C", "C", "B", "D", "E", "E", "A"],
    ["B", "C", "C", "C", "E", "E", "E", "E"],
    ["B", "F", "F", "F", "E", "E", "E", "E"],
    ["B", "F", "F", "B", "G", "E", "E", "G"],
    ["B", "B", "B", "B", "G", "G", "G", "G"],
    ["H", "H", "G", "G", "G", "G", "G", "G"]
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

export default level724;
