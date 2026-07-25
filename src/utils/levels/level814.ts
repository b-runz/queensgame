import {
  saharaSand,
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  celadon,
  lightWisteria,
  emerald,
  halfBaked
} from "../colors";

const level814 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "B", "C", "C", "C", "C", "C", "C"],
    ["D", "D", "D", "D", "E", "E", "E", "C", "C"],
    ["D", "F", "F", "F", "F", "F", "E", "C", "G"],
    ["D", "F", "F", "F", "F", "F", "E", "C", "G"],
    ["D", "F", "F", "F", "F", "F", "H", "C", "G"],
    ["I", "F", "F", "F", "F", "F", "H", "G", "G"],
    ["I", "F", "F", "F", "F", "F", "H", "G", "G"],
    ["I", "I", "H", "H", "H", "H", "H", "G", "G"]
  ],
  regionColors: {
    A: saharaSand,
    B: altoMain,
    C: anakiwa,
    D: bittersweet,
    E: chardonnay,
    F: celadon,
    G: lightWisteria,
    H: emerald,
    I: halfBaked
  },
};

export default level814;
