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

const level804 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "A", "A", "A", "C"],
    ["D", "D", "A", "B", "B", "A", "C", "C"],
    ["A", "D", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "E", "A", "A", "A", "A"],
    ["A", "A", "A", "E", "E", "A", "F", "F"],
    ["G", "G", "A", "A", "A", "A", "A", "F"],
    ["A", "G", "A", "A", "H", "H", "A", "A"],
    ["A", "A", "A", "A", "H", "A", "A", "A"]
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

export default level804;
