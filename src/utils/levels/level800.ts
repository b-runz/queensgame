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

const level800 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "A", "A", "A", "C", "C", "A"],
    ["A", "B", "B", "B", "A", "C", "C", "C", "A"],
    ["A", "A", "B", "B", "A", "C", "C", "D", "D"],
    ["A", "A", "A", "A", "E", "D", "D", "D", "D"],
    ["A", "F", "A", "A", "E", "D", "D", "G", "D"],
    ["F", "F", "F", "A", "E", "D", "G", "G", "G"],
    ["H", "F", "F", "A", "E", "D", "G", "G", "I"],
    ["H", "H", "H", "E", "E", "E", "I", "I", "I"]
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

export default level800;
