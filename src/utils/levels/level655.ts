import {
  altoMain,
  saharaSand,
  anakiwa,
  bittersweet,
  chardonnay,
  celadon,
  lightWisteria,
  emerald,
  halfBaked
} from "../colors";

const level655 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "C", "A", "C", "C", "D", "B", "B", "B"],
    ["C", "C", "C", "C", "C", "D", "B", "B", "B"],
    ["E", "C", "C", "C", "D", "D", "B", "B", "B"],
    ["E", "E", "C", "E", "D", "B", "B", "B", "B"],
    ["F", "E", "E", "E", "G", "G", "B", "G", "G"],
    ["F", "F", "F", "E", "G", "G", "G", "G", "G"],
    ["H", "F", "F", "E", "E", "G", "G", "G", "I"],
    ["H", "H", "F", "F", "E", "E", "G", "I", "I"]
  ],
  regionColors: {
    A: altoMain,
    B: saharaSand,
    C: anakiwa,
    D: bittersweet,
    E: chardonnay,
    F: celadon,
    G: lightWisteria,
    H: emerald,
    I: halfBaked
  },
};

export default level655;
