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

const level815 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "D", "D", "D", "D", "B"],
    ["A", "A", "A", "C", "D", "D", "D", "D", "E"],
    ["A", "C", "C", "C", "D", "F", "F", "F", "E"],
    ["A", "C", "D", "D", "D", "F", "E", "E", "E"],
    ["A", "C", "C", "C", "D", "F", "F", "F", "G"],
    ["A", "D", "D", "D", "D", "F", "H", "F", "G"],
    ["A", "D", "D", "D", "D", "F", "F", "F", "G"],
    ["A", "A", "I", "I", "I", "I", "I", "G", "G"]
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

export default level815;
