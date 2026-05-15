import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
  emerald
} from "../colors";

const level745 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["C", "C", "A", "D", "D", "B", "E", "E"],
    ["C", "A", "A", "D", "B", "B", "E", "F"],
    ["C", "G", "A", "D", "B", "B", "E", "F"],
    ["C", "G", "H", "D", "B", "B", "E", "F"],
    ["C", "H", "H", "D", "B", "B", "E", "F"],
    ["C", "C", "B", "D", "D", "B", "E", "E"],
    ["B", "B", "B", "B", "B", "B", "B", "B"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: lightWisteria,
    G: saharaSand,
    H: emerald
  },
};

export default level745;
