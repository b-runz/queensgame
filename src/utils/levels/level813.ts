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

const level813 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "D", "E", "E"],
    ["A", "A", "B", "B", "C", "D", "D", "E", "E"],
    ["A", "B", "B", "C", "C", "D", "D", "D", "E"],
    ["A", "B", "F", "F", "F", "F", "F", "D", "E"],
    ["A", "B", "F", "G", "G", "G", "H", "D", "E"],
    ["A", "B", "F", "F", "H", "H", "H", "D", "E"],
    ["A", "B", "B", "F", "H", "I", "D", "D", "E"],
    ["A", "A", "B", "B", "H", "I", "D", "E", "E"],
    ["A", "A", "B", "I", "I", "I", "D", "E", "E"]
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

export default level813;
