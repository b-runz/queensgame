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

const level654 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "C", "C", "D", "D"],
    ["A", "A", "A", "A", "A", "C", "D", "D"],
    ["E", "E", "A", "A", "A", "A", "D", "D"],
    ["F", "E", "A", "A", "A", "A", "D", "D"],
    ["F", "E", "E", "A", "A", "A", "A", "A"],
    ["F", "G", "G", "G", "H", "A", "A", "A"],
    ["F", "F", "F", "G", "H", "A", "A", "A"]
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

export default level654;
