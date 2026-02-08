import {
  altoMain,
  anakiwa,
  bittersweet,
  saharaSand,
  celadon,
  chardonnay,
  lightWisteria,
  emerald,
  halfBaked
} from "../colors";

const level649 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "D", "D"],
    ["A", "A", "A", "E", "B", "B", "C", "C", "D"],
    ["A", "E", "E", "E", "B", "A", "C", "D", "D"],
    ["A", "A", "E", "F", "F", "A", "A", "G", "D"],
    ["A", "A", "F", "F", "A", "A", "G", "G", "D"],
    ["A", "A", "A", "F", "A", "H", "H", "G", "G"],
    ["A", "I", "A", "A", "A", "A", "H", "H", "A"],
    ["A", "I", "I", "A", "A", "A", "H", "A", "A"],
    ["I", "I", "A", "A", "A", "A", "A", "A", "A"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: saharaSand,
    E: celadon,
    F: chardonnay,
    G: lightWisteria,
    H: emerald,
    I: halfBaked
  },
};

export default level649;
