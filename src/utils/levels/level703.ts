import {
  altoMain,
  lightWisteria,
  anakiwa,
  bittersweet,
  chardonnay,
  celadon,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level703 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "A", "A", "A", "C", "C", "A"],
    ["A", "B", "B", "B", "A", "C", "C", "C", "A"],
    ["A", "A", "B", "B", "D", "C", "C", "E", "A"],
    ["F", "F", "F", "D", "D", "D", "E", "E", "E"],
    ["F", "F", "G", "G", "D", "H", "H", "E", "E"],
    ["F", "G", "G", "G", "I", "H", "H", "H", "E"],
    ["F", "G", "G", "F", "F", "F", "H", "H", "E"],
    ["F", "F", "F", "F", "E", "E", "E", "E", "E"]
  ],
  regionColors: {
    A: altoMain,
    B: lightWisteria,
    C: anakiwa,
    D: bittersweet,
    E: chardonnay,
    F: celadon,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level703;
