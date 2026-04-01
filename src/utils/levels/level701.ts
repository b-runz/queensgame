import {
  saharaSand,
  altoMain,
  chardonnay,
  lightWisteria,
  anakiwa,
  bittersweet,
  celadon,
  emerald
} from "../colors";

const level701 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "B", "A", "C", "C", "A", "A"],
    ["B", "B", "B", "D", "D", "C", "A", "A"],
    ["E", "E", "B", "E", "C", "C", "C", "A"],
    ["E", "E", "E", "E", "E", "F", "F", "A"],
    ["E", "G", "G", "E", "E", "H", "F", "H"],
    ["E", "E", "G", "E", "E", "H", "H", "H"],
    ["E", "G", "G", "G", "E", "E", "E", "H"]
  ],
  regionColors: {
    A: saharaSand,
    B: altoMain,
    C: chardonnay,
    D: lightWisteria,
    E: anakiwa,
    F: bittersweet,
    G: celadon,
    H: emerald
  },
};

export default level701;
