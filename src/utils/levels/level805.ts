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

const level805 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "A", "A", "C", "C", "C", "C"],
    ["A", "B", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "D", "A", "E", "E", "A", "F"],
    ["A", "D", "D", "D", "A", "E", "E", "A", "F"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "F"],
    ["A", "G", "A", "H", "A", "A", "A", "A", "F"],
    ["A", "G", "A", "H", "H", "A", "I", "A", "A"],
    ["G", "G", "A", "A", "H", "A", "I", "I", "I"]
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

export default level805;
