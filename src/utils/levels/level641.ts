import {
  saharaSand,
  altoMain,
  anakiwa,
  lightWisteria,
  bittersweet,
  chardonnay,
  celadon,
  emerald,
  halfBaked
} from "../colors";

const level641 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C", "B"],
    ["D", "A", "B", "B", "B", "B", "C", "B", "B"],
    ["D", "A", "E", "E", "E", "B", "C", "B", "B"],
    ["F", "F", "F", "E", "B", "B", "B", "B", "B"],
    ["G", "F", "G", "E", "G", "G", "H", "H", "H"],
    ["G", "F", "G", "G", "G", "G", "G", "H", "G"],
    ["G", "G", "G", "I", "I", "I", "G", "H", "G"],
    ["G", "G", "G", "G", "I", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "I", "G", "G", "G", "G"]
  ],
  regionColors: {
    A: saharaSand,
    B: altoMain,
    C: anakiwa,
    D: lightWisteria,
    E: bittersweet,
    F: chardonnay,
    G: celadon,
    H: emerald,
    I: halfBaked
  },
};

export default level641;
