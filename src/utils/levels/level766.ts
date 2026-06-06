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

const level766 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["D", "D", "E", "B", "E", "B", "C", "F", "F"],
    ["D", "E", "E", "E", "E", "C", "C", "C", "F"],
    ["D", "D", "E", "E", "C", "C", "C", "F", "F"],
    ["E", "E", "E", "E", "E", "C", "G", "G", "G"],
    ["E", "E", "H", "H", "E", "I", "I", "G", "G"],
    ["E", "E", "H", "E", "E", "E", "I", "G", "G"],
    ["G", "G", "H", "H", "G", "I", "I", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G"]
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

export default level766;
