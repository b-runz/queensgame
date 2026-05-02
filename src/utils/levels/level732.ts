import {
  lightWisteria,
  altoMain,
  anakiwa,
  saharaSand,
  chardonnay,
  bittersweet,
  celadon,
  emerald,
  halfBaked
} from "../colors";

const level732 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "A", "A", "C", "C", "C", "A"],
    ["B", "B", "D", "A", "E", "E", "E", "C", "A"],
    ["B", "D", "D", "D", "E", "C", "C", "C", "A"],
    ["B", "F", "D", "E", "E", "C", "G", "G", "G"],
    ["B", "F", "F", "E", "H", "C", "C", "C", "G"],
    ["B", "B", "F", "F", "H", "I", "I", "G", "G"],
    ["F", "F", "F", "F", "H", "H", "I", "I", "I"]
  ],
  regionColors: {
    A: lightWisteria,
    B: altoMain,
    C: anakiwa,
    D: saharaSand,
    E: chardonnay,
    F: bittersweet,
    G: celadon,
    H: emerald,
    I: halfBaked
  },
};

export default level732;
