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

const level758 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "A"],
    ["A", "B", "C", "C", "D", "D", "B", "A"],
    ["A", "B", "C", "E", "E", "D", "B", "A"],
    ["A", "F", "C", "E", "E", "D", "F", "A"],
    ["A", "F", "C", "C", "D", "D", "F", "A"],
    ["A", "F", "F", "F", "F", "F", "F", "G"],
    ["A", "A", "H", "H", "G", "G", "G", "G"]
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

export default level758;
