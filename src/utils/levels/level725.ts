import {
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  celadon,
  lightWisteria,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level725 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "A", "A", "C", "A", "D"],
    ["A", "E", "E", "E", "A", "C", "C", "D", "D"],
    ["A", "A", "E", "A", "A", "A", "C", "A", "D"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "F", "A", "G", "A", "A", "H", "A", "A"],
    ["A", "F", "F", "G", "G", "H", "H", "H", "A"],
    ["A", "F", "A", "G", "A", "A", "I", "A", "A"],
    ["A", "A", "A", "A", "A", "I", "I", "I", "A"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: chardonnay,
    E: celadon,
    F: lightWisteria,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level725;
