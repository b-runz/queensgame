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

const level683 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C"],
    ["A", "D", "D", "B", "E", "F", "C", "G"],
    ["A", "D", "D", "B", "E", "F", "C", "G"],
    ["A", "D", "D", "B", "E", "F", "C", "G"],
    ["A", "D", "D", "B", "H", "H", "C", "G"],
    ["D", "D", "H", "H", "H", "H", "H", "G"],
    ["D", "D", "D", "H", "H", "H", "H", "G"],
    ["D", "G", "G", "G", "G", "G", "G", "G"]
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

export default level683;
