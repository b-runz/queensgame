import {
  altoMain,
  anakiwa,
  lightWisteria,
  bittersweet,
  chardonnay,
  celadon,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level840 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "A", "A", "C", "A", "A"],
    ["A", "A", "B", "A", "A", "C", "C", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "C", "A", "A"],
    ["D", "D", "D", "A", "A", "A", "A", "A", "A"],
    ["A", "D", "A", "A", "A", "A", "A", "E", "A"],
    ["A", "A", "A", "A", "F", "F", "E", "E", "E"],
    ["A", "A", "G", "H", "H", "F", "F", "F", "F"],
    ["A", "A", "G", "G", "H", "H", "I", "F", "F"],
    ["A", "A", "G", "H", "H", "I", "I", "I", "F"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: lightWisteria,
    D: bittersweet,
    E: chardonnay,
    F: celadon,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level840;
