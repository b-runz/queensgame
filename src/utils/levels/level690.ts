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

const level690 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["A", "A", "B", "D", "D", "D", "B", "E", "C"],
    ["F", "F", "B", "D", "B", "D", "B", "E", "C"],
    ["F", "F", "B", "B", "B", "D", "B", "E", "C"],
    ["F", "F", "F", "B", "D", "D", "B", "E", "G"],
    ["F", "F", "F", "B", "D", "B", "B", "E", "G"],
    ["F", "H", "F", "B", "B", "B", "E", "E", "G"],
    ["H", "H", "F", "B", "I", "B", "E", "E", "G"],
    ["H", "F", "F", "B", "B", "B", "E", "E", "G"]
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

export default level690;
