import {
  altoMain,
  anakiwa,
  saharaSand,
  lightWisteria,
  bittersweet,
  chardonnay,
  celadon,
  emerald,
  halfBaked
} from "../colors";

const level648 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "C", "A", "A", "A"],
    ["B", "B", "B", "C", "C", "C", "C", "C", "C"],
    ["B", "C", "C", "C", "D", "D", "D", "D", "C"],
    ["C", "C", "D", "D", "D", "E", "D", "D", "D"],
    ["C", "F", "F", "E", "E", "E", "G", "G", "D"],
    ["F", "F", "E", "E", "H", "H", "H", "G", "G"],
    ["F", "E", "E", "H", "H", "I", "H", "H", "H"],
    ["E", "E", "H", "H", "I", "I", "I", "I", "I"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: saharaSand,
    D: lightWisteria,
    E: bittersweet,
    F: chardonnay,
    G: celadon,
    H: emerald,
    I: halfBaked
  },
};

export default level648;
