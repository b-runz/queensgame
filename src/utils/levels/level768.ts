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

const level768 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "A", "A", "D", "B", "A"],
    ["A", "C", "A", "A", "A", "D", "D", "A"],
    ["A", "A", "A", "E", "F", "F", "A", "A"],
    ["A", "A", "A", "E", "A", "F", "A", "A"],
    ["A", "A", "G", "G", "A", "A", "A", "A"],
    ["A", "A", "A", "H", "H", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"]
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

export default level768;
