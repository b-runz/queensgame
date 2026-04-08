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

const level708 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "B", "B", "D", "B", "B", "C", "C"],
    ["A", "B", "B", "D", "D", "B", "B", "C"],
    ["A", "B", "B", "B", "B", "B", "B", "C"],
    ["E", "B", "B", "B", "B", "B", "B", "C"],
    ["E", "B", "B", "F", "F", "B", "B", "C"],
    ["E", "E", "B", "B", "F", "B", "B", "G"],
    ["E", "H", "H", "B", "B", "B", "G", "G"]
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

export default level708;
