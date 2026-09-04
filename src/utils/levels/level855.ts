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

const level855 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "A", "D", "D", "D", "B"],
    ["C", "C", "C", "C", "A", "C", "C", "D", "D"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "D"],
    ["C", "C", "C", "C", "E", "D", "D", "D", "D"],
    ["F", "E", "E", "E", "E", "E", "E", "E", "G"],
    ["F", "F", "E", "E", "E", "E", "E", "H", "G"],
    ["F", "F", "F", "E", "E", "E", "H", "H", "G"],
    ["F", "I", "I", "I", "E", "H", "H", "G", "G"]
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

export default level855;
