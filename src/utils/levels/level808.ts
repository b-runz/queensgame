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

const level808 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "C", "C", "D", "D", "E", "A"],
    ["B", "C", "C", "D", "D", "D", "E", "E", "A"],
    ["B", "C", "C", "C", "F", "F", "F", "E", "A"],
    ["B", "C", "G", "F", "F", "F", "F", "H", "A"],
    ["B", "G", "G", "F", "F", "H", "H", "H", "A"],
    ["B", "G", "I", "F", "F", "F", "H", "H", "A"],
    ["B", "I", "I", "F", "H", "H", "H", "H", "A"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "A"]
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

export default level808;
