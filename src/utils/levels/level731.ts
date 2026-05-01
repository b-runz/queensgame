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

const level731 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "C"],
    ["D", "A", "B", "B", "C", "E", "C", "C"],
    ["D", "A", "A", "F", "E", "E", "G", "G"],
    ["D", "D", "F", "F", "F", "E", "G", "G"],
    ["D", "D", "D", "F", "F", "F", "G", "G"],
    ["D", "D", "D", "D", "F", "H", "H", "G"],
    ["D", "D", "D", "D", "D", "D", "H", "G"],
    ["D", "D", "D", "D", "D", "D", "H", "H"]
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

export default level731;
