import {
  altoMain,
  anakiwa,
  lightWisteria,
  chardonnay,
  saharaSand,
  bittersweet,
  celadon,
  emerald
} from "../colors";

const level699 = {
  size: 8,
  colorRegions: [
    ["A", "B", "A", "A", "C", "C", "C", "C"],
    ["A", "B", "A", "A", "C", "C", "C", "C"],
    ["A", "A", "A", "A", "C", "C", "C", "C"],
    ["A", "A", "A", "A", "D", "C", "C", "C"],
    ["E", "E", "E", "E", "F", "F", "F", "F"],
    ["E", "E", "E", "E", "F", "F", "F", "F"],
    ["E", "E", "E", "E", "F", "F", "G", "F"],
    ["E", "H", "H", "E", "F", "F", "G", "F"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: lightWisteria,
    D: chardonnay,
    E: saharaSand,
    F: bittersweet,
    G: celadon,
    H: emerald
  },
};

export default level699;
