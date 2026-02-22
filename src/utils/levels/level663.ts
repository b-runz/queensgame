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

const level663 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["A", "B", "B", "D", "D", "D", "D", "D", "C"],
    ["E", "B", "B", "F", "F", "D", "D", "D", "C"],
    ["E", "B", "F", "F", "D", "D", "D", "D", "G"],
    ["E", "E", "E", "D", "D", "D", "H", "D", "G"],
    ["I", "I", "D", "D", "D", "H", "H", "D", "G"],
    ["I", "D", "D", "D", "H", "H", "H", "G", "G"],
    ["I", "D", "D", "H", "H", "H", "H", "H", "G"],
    ["I", "I", "I", "I", "H", "G", "G", "G", "G"]
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

export default level663;
