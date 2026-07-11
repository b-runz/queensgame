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

const level801 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "A", "A", "A", "C", "D", "D"],
    ["A", "B", "B", "B", "A", "C", "C", "C", "E"],
    ["A", "A", "B", "F", "A", "A", "C", "E", "E"],
    ["A", "A", "F", "F", "F", "A", "A", "A", "E"],
    ["A", "A", "A", "F", "A", "A", "A", "A", "A"],
    ["A", "A", "G", "A", "A", "A", "H", "A", "A"],
    ["A", "G", "G", "G", "A", "H", "H", "H", "A"],
    ["A", "A", "G", "A", "A", "I", "H", "A", "A"],
    ["A", "A", "A", "A", "I", "I", "I", "A", "A"]
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

export default level801;
