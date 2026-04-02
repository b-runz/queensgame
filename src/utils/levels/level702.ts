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

const level702 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "C", "D", "D", "D", "D"],
    ["A", "B", "B", "C", "C", "D", "D", "D", "D"],
    ["A", "B", "B", "E", "E", "E", "D", "D", "D"],
    ["A", "A", "E", "E", "E", "E", "E", "F", "D"],
    ["A", "A", "E", "E", "G", "E", "E", "F", "D"],
    ["H", "A", "E", "E", "E", "E", "E", "F", "F"],
    ["H", "H", "H", "E", "E", "E", "F", "F", "F"],
    ["H", "H", "H", "H", "I", "I", "F", "I", "F"],
    ["H", "H", "H", "H", "I", "I", "I", "I", "F"]
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

export default level702;
