import {
  altoMain,
  chardonnay,
  anakiwa,
  bittersweet,
  lightWisteria,
  celadon,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level754 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "E", "E", "B", "B"],
    ["A", "C", "D", "D", "E", "E", "F", "F", "B"],
    ["A", "D", "D", "G", "E", "F", "F", "H", "B"],
    ["A", "A", "G", "G", "F", "F", "H", "H", "B"],
    ["A", "A", "G", "I", "F", "H", "H", "B", "B"],
    ["A", "A", "I", "I", "H", "H", "B", "B", "B"],
    ["I", "I", "I", "B", "B", "B", "B", "B", "B"]
  ],
  regionColors: {
    A: altoMain,
    B: chardonnay,
    C: anakiwa,
    D: bittersweet,
    E: lightWisteria,
    F: celadon,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level754;
