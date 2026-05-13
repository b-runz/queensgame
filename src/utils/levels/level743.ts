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

const level743 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "C", "D", "D", "A"],
    ["A", "A", "B", "A", "C", "A", "D", "A"],
    ["A", "A", "B", "A", "A", "A", "D", "A"],
    ["A", "A", "B", "A", "A", "A", "A", "A"],
    ["E", "A", "A", "A", "A", "A", "A", "A"],
    ["E", "A", "F", "A", "A", "A", "A", "A"],
    ["E", "A", "F", "A", "G", "A", "A", "H"],
    ["E", "E", "F", "F", "G", "G", "A", "H"]
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

export default level743;
