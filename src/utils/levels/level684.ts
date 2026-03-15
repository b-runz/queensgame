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

const level684 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "D", "D", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "B", "B", "B", "B", "E", "E", "E", "C"],
    ["B", "B", "B", "B", "B", "B", "E", "E", "E"],
    ["B", "B", "F", "G", "B", "B", "B", "E", "E"],
    ["H", "F", "F", "G", "G", "B", "B", "B", "E"],
    ["H", "H", "F", "I", "I", "I", "B", "B", "B"],
    ["H", "H", "H", "I", "I", "I", "I", "B", "B"]
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

export default level684;
