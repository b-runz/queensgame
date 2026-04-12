import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  lightWisteria,
  chardonnay,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level712 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "B"],
    ["C", "C", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "C", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "C", "A", "B", "D", "D", "D", "D", "D"],
    ["C", "C", "A", "B", "B", "B", "D", "E", "E"],
    ["A", "A", "A", "A", "A", "F", "D", "E", "E"],
    ["G", "G", "G", "H", "H", "F", "D", "E", "E"],
    ["I", "G", "H", "H", "F", "F", "D", "E", "E"],
    ["I", "I", "I", "H", "D", "D", "D", "D", "D"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: lightWisteria,
    F: chardonnay,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level712;
