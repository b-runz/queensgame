import {
  saharaSand,
  altoMain,
  chardonnay,
  anakiwa,
  bittersweet,
  celadon,
  lightWisteria,
  emerald,
  halfBaked
} from "../colors";

const level828 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C", "D"],
    ["A", "A", "B", "B", "B", "C", "C", "D", "D"],
    ["E", "E", "B", "B", "F", "F", "D", "D", "D"],
    ["E", "E", "E", "F", "F", "F", "G", "G", "D"],
    ["H", "E", "E", "F", "F", "G", "G", "G", "D"],
    ["H", "H", "H", "I", "I", "G", "G", "D", "D"],
    ["H", "H", "I", "I", "I", "D", "D", "D", "D"],
    ["D", "H", "I", "I", "D", "D", "D", "D", "D"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D"]
  ],
  regionColors: {
    A: saharaSand,
    B: altoMain,
    C: chardonnay,
    D: anakiwa,
    E: bittersweet,
    F: celadon,
    G: lightWisteria,
    H: emerald,
    I: halfBaked
  },
};

export default level828;
