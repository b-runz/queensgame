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

const level795 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "D", "D", "D", "D", "B"],
    ["A", "C", "E", "E", "E", "E", "E", "D", "B"],
    ["A", "C", "E", "F", "F", "F", "E", "D", "G"],
    ["A", "C", "E", "F", "H", "F", "E", "D", "G"],
    ["A", "C", "D", "F", "H", "H", "E", "D", "G"],
    ["I", "C", "D", "F", "F", "F", "E", "D", "G"],
    ["I", "C", "D", "D", "D", "D", "D", "D", "G"],
    ["I", "C", "C", "C", "C", "C", "C", "G", "G"]
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

export default level795;
