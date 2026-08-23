import {
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  celadon,
  saharaSand,
  lightWisteria,
  emerald,
  halfBaked
} from "../colors";

const level843 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "A", "B", "B", "B", "C"],
    ["A", "D", "E", "E", "E", "E", "B", "C", "C"],
    ["A", "D", "E", "E", "F", "E", "E", "C", "G"],
    ["A", "D", "E", "F", "F", "F", "E", "G", "G"],
    ["A", "A", "E", "E", "F", "E", "E", "G", "H"],
    ["A", "A", "A", "E", "E", "E", "E", "G", "H"],
    ["A", "A", "A", "A", "I", "I", "I", "G", "H"],
    ["I", "I", "I", "I", "I", "H", "H", "H", "H"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: chardonnay,
    E: celadon,
    F: saharaSand,
    G: lightWisteria,
    H: emerald,
    I: halfBaked
  },
};

export default level843;
