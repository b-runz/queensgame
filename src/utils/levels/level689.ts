import {
  altoMain,
  anakiwa,
  lightWisteria,
  bittersweet,
  celadon,
  chardonnay,
  saharaSand,
  emerald
} from "../colors";

const level689 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "C", "C", "C", "B"],
    ["A", "D", "D", "E", "F", "C", "C", "B"],
    ["A", "D", "D", "E", "F", "C", "C", "B"],
    ["B", "E", "E", "E", "E", "B", "B", "B"],
    ["B", "E", "G", "G", "G", "H", "H", "B"],
    ["B", "B", "H", "H", "H", "H", "H", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: lightWisteria,
    D: bittersweet,
    E: celadon,
    F: chardonnay,
    G: saharaSand,
    H: emerald
  },
};

export default level689;
