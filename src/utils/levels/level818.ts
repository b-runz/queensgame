import {
  altoMain,
  anakiwa,
  lightWisteria,
  saharaSand,
  chardonnay,
  bittersweet,
  celadon,
  emerald
} from "../colors";

const level818 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "C", "C", "A", "A"],
    ["A", "B", "B", "C", "C", "C", "A", "A"],
    ["A", "D", "D", "A", "A", "A", "E", "E"],
    ["A", "A", "D", "A", "A", "A", "E", "E"],
    ["A", "A", "D", "A", "A", "A", "E", "F"],
    ["A", "A", "A", "A", "G", "G", "F", "F"],
    ["H", "H", "H", "G", "G", "G", "G", "F"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: lightWisteria,
    D: saharaSand,
    E: chardonnay,
    F: bittersweet,
    G: celadon,
    H: emerald
  },
};

export default level818;
