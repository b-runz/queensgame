import {
  altoMain,
  anakiwa,
  saharaSand,
  bittersweet,
  chardonnay,
  lightWisteria,
  celadon,
  emerald,
  halfBaked
} from "../colors";

const level821 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "D", "D"],
    ["A", "B", "B", "E", "B", "C", "C", "C", "D"],
    ["A", "B", "E", "E", "E", "B", "C", "B", "D"],
    ["A", "B", "B", "E", "B", "B", "B", "B", "D"],
    ["A", "B", "B", "B", "B", "F", "F", "B", "D"],
    ["A", "A", "B", "B", "G", "F", "F", "H", "H"],
    ["A", "A", "A", "A", "G", "H", "H", "H", "H"],
    ["A", "A", "A", "I", "G", "I", "H", "H", "H"],
    ["A", "A", "A", "I", "I", "I", "H", "H", "H"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: saharaSand,
    D: bittersweet,
    E: chardonnay,
    F: lightWisteria,
    G: celadon,
    H: emerald,
    I: halfBaked
  },
};

export default level821;
