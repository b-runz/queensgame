import {
  saharaSand,
  altoMain,
  anakiwa,
  bittersweet,
  lightWisteria,
  chardonnay,
  celadon,
  emerald
} from "../colors";

const level750 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "D", "D", "E"],
    ["A", "A", "A", "A", "B", "B", "B", "E"],
    ["A", "A", "A", "A", "A", "B", "B", "E"],
    ["A", "F", "F", "E", "E", "E", "E", "E"],
    ["A", "F", "F", "F", "E", "E", "E", "E"],
    ["A", "F", "G", "G", "G", "E", "E", "E"],
    ["F", "F", "H", "H", "G", "G", "G", "E"]
  ],
  regionColors: {
    A: saharaSand,
    B: altoMain,
    C: anakiwa,
    D: bittersweet,
    E: lightWisteria,
    F: chardonnay,
    G: celadon,
    H: emerald
  },
};

export default level750;
