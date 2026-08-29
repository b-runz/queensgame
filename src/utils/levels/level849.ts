import {
  altoMain,
  anakiwa,
  lightWisteria,
  saharaSand,
  bittersweet,
  chardonnay,
  celadon,
  emerald,
  halfBaked
} from "../colors";

const level849 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "D", "D"],
    ["A", "A", "A", "B", "B", "B", "C", "C", "D"],
    ["A", "A", "E", "E", "E", "E", "E", "C", "D"],
    ["A", "A", "A", "F", "F", "F", "D", "D", "D"],
    ["A", "G", "G", "G", "F", "D", "D", "H", "H"],
    ["G", "G", "G", "G", "F", "D", "H", "H", "H"],
    ["G", "G", "G", "G", "I", "D", "H", "H", "H"],
    ["G", "G", "G", "G", "I", "D", "D", "H", "H"],
    ["G", "G", "G", "I", "I", "I", "H", "H", "H"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: lightWisteria,
    D: saharaSand,
    E: bittersweet,
    F: chardonnay,
    G: celadon,
    H: emerald,
    I: halfBaked
  },
};

export default level849;
