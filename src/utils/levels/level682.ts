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

const level682 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "B", "D", "E", "E", "B", "B", "C"],
    ["A", "B", "B", "D", "F", "F", "B", "B", "C"],
    ["A", "A", "B", "B", "F", "B", "B", "G", "G"],
    ["H", "A", "A", "B", "F", "B", "G", "G", "G"],
    ["H", "I", "A", "B", "F", "B", "G", "G", "G"],
    ["H", "I", "B", "B", "F", "B", "B", "G", "G"]
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

export default level682;
