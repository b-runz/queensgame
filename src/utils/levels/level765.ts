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

const level765 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C", "D", "D"],
    ["A", "A", "A", "B", "C", "D", "D", "D", "D"],
    ["A", "A", "C", "C", "C", "D", "D", "D", "E"],
    ["A", "A", "C", "D", "D", "D", "D", "D", "E"],
    ["C", "C", "C", "D", "D", "D", "E", "E", "E"],
    ["C", "D", "D", "D", "D", "D", "E", "F", "F"],
    ["C", "G", "G", "D", "E", "E", "E", "F", "F"],
    ["G", "G", "G", "D", "E", "H", "H", "H", "I"],
    ["G", "G", "E", "E", "E", "H", "I", "I", "I"]
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

export default level765;
