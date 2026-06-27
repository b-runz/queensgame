import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level787 = {
  size: 9,
  colorRegions: [
    ["A", "B", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "A", "C", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "C", "C", "A", "D", "A"],
    ["A", "A", "A", "A", "A", "C", "A", "D", "D"],
    ["E", "A", "A", "A", "A", "A", "A", "A", "D"],
    ["E", "E", "A", "F", "A", "A", "A", "A", "G"],
    ["A", "E", "A", "F", "F", "A", "H", "A", "G"],
    ["A", "A", "A", "A", "F", "I", "H", "H", "G"],
    ["A", "A", "A", "I", "I", "I", "I", "H", "G"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: lightWisteria,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level787;
