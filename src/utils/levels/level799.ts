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

const level799 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "D", "D", "D", "D", "C", "C"],
    ["E", "F", "D", "D", "D", "G", "G", "C"],
    ["E", "F", "F", "D", "G", "G", "G", "E"],
    ["E", "F", "F", "F", "H", "G", "G", "E"],
    ["E", "F", "F", "H", "H", "H", "G", "E"],
    ["E", "E", "H", "H", "H", "H", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E"]
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

export default level799;
