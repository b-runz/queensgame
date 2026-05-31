import {
  altoMain,
  anakiwa,
  bittersweet,
  lightWisteria,
  chardonnay,
  celadon,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level760 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "D", "D", "D", "D", "D", "B", "C"],
    ["A", "B", "E", "E", "E", "F", "D", "B", "C"],
    ["A", "B", "B", "E", "E", "F", "F", "C", "C"],
    ["A", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["A", "G", "G", "H", "H", "H", "B", "B", "C"],
    ["A", "B", "G", "G", "H", "H", "I", "B", "C"],
    ["A", "B", "G", "G", "I", "I", "I", "B", "C"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "C"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: lightWisteria,
    E: chardonnay,
    F: celadon,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level760;
