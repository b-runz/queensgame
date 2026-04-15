import {
  altoMain,
  saharaSand,
  anakiwa,
  bittersweet,
  celadon,
  lightWisteria,
  chardonnay,
  emerald
} from "../colors";

const level715 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "C", "A", "A", "D", "B", "B"],
    ["A", "A", "C", "C", "D", "D", "B", "B"],
    ["A", "A", "A", "D", "D", "B", "B", "B"],
    ["A", "A", "D", "D", "E", "E", "B", "B"],
    ["A", "D", "D", "F", "F", "E", "E", "B"],
    ["D", "D", "F", "F", "F", "F", "G", "G"],
    ["H", "F", "F", "F", "F", "F", "F", "G"]
  ],
  regionColors: {
    A: altoMain,
    B: saharaSand,
    C: anakiwa,
    D: bittersweet,
    E: celadon,
    F: lightWisteria,
    G: chardonnay,
    H: emerald
  },
};

export default level715;
