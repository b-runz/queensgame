import {
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  lightWisteria,
  celadon,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level802 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "A", "A", "B", "B", "D", "E", "C"],
    ["A", "D", "D", "A", "A", "A", "D", "E", "E"],
    ["F", "D", "D", "D", "D", "D", "D", "E", "E"],
    ["F", "F", "D", "D", "G", "D", "D", "E", "H"],
    ["F", "F", "D", "D", "D", "D", "D", "D", "H"],
    ["F", "I", "D", "I", "I", "I", "D", "D", "H"],
    ["I", "I", "D", "I", "I", "I", "I", "D", "H"],
    ["I", "I", "I", "I", "I", "I", "H", "H", "H"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: chardonnay,
    E: lightWisteria,
    F: celadon,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level802;
