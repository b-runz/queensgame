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

const level850 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "C", "D", "D", "A"],
    ["A", "A", "B", "B", "C", "C", "D", "D", "A"],
    ["A", "A", "B", "C", "C", "E", "D", "D", "A"],
    ["A", "F", "F", "F", "F", "E", "E", "D", "D"],
    ["A", "F", "F", "F", "G", "G", "E", "E", "D"],
    ["F", "F", "H", "H", "I", "G", "G", "D", "D"],
    ["F", "H", "H", "I", "I", "D", "G", "D", "D"],
    ["F", "H", "I", "I", "D", "D", "D", "D", "D"]
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

export default level850;
