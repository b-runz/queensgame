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

const level825 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C", "D"],
    ["A", "E", "A", "B", "C", "F", "C", "D"],
    ["A", "E", "A", "B", "C", "F", "C", "D"],
    ["A", "A", "A", "B", "C", "C", "C", "D"],
    ["A", "A", "A", "B", "A", "A", "G", "G"],
    ["A", "A", "A", "B", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "H"],
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

export default level825;
