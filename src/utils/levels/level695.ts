import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  saharaSand,
  lightWisteria,
  emerald,
  halfBaked
} from "../colors";

const level695 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "A", "A", "D", "B", "D", "B", "C", "C"],
    ["A", "A", "D", "D", "D", "D", "D", "C", "C"],
    ["A", "A", "D", "D", "D", "D", "D", "E", "C"],
    ["F", "F", "F", "D", "D", "D", "G", "E", "E"],
    ["F", "F", "F", "F", "D", "G", "G", "E", "H"],
    ["F", "F", "F", "F", "I", "I", "G", "H", "H"],
    ["F", "F", "F", "F", "I", "I", "H", "H", "H"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: saharaSand,
    G: lightWisteria,
    H: emerald,
    I: halfBaked
  },
};

export default level695;
