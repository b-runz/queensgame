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

const level653 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["A", "B", "B", "D", "D", "D", "B", "B", "C"],
    ["A", "B", "D", "D", "D", "D", "D", "B", "E"],
    ["A", "B", "B", "D", "D", "D", "B", "B", "E"],
    ["A", "A", "B", "B", "D", "B", "B", "E", "E"],
    ["F", "A", "A", "B", "B", "B", "E", "E", "E"],
    ["F", "F", "F", "F", "G", "E", "E", "E", "E"],
    ["F", "F", "H", "H", "G", "I", "I", "E", "E"],
    ["F", "H", "H", "H", "G", "I", "I", "I", "E"]
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

export default level653;
