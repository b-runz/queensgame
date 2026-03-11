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

const level680 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "C", "C"],
    ["A", "D", "B", "C", "C", "C", "C", "C"],
    ["E", "D", "B", "C", "C", "C", "C", "C"],
    ["E", "B", "B", "B", "C", "C", "C", "C"],
    ["E", "E", "E", "E", "F", "F", "C", "C"],
    ["G", "G", "E", "E", "E", "F", "C", "C"],
    ["G", "G", "G", "G", "G", "F", "H", "H"],
    ["G", "G", "G", "G", "F", "F", "F", "H"]
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

export default level680;
