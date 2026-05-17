import {
  altoMain,
  anakiwa,
  saharaSand,
  chardonnay,
  lightWisteria,
  bittersweet,
  celadon,
  emerald,
  halfBaked
} from "../colors";

const level747 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "B", "A", "A", "A"],
    ["A", "A", "C", "C", "C", "C", "C", "A", "A"],
    ["A", "D", "D", "D", "D", "D", "D", "E", "A"],
    ["A", "D", "F", "F", "F", "G", "G", "E", "A"],
    ["A", "D", "F", "H", "H", "H", "G", "E", "A"],
    ["A", "D", "F", "F", "H", "I", "G", "E", "A"],
    ["F", "F", "F", "F", "H", "I", "I", "E", "E"],
    ["F", "F", "F", "H", "H", "H", "I", "I", "E"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: saharaSand,
    D: chardonnay,
    E: lightWisteria,
    F: bittersweet,
    G: celadon,
    H: emerald,
    I: halfBaked
  },
};

export default level747;
