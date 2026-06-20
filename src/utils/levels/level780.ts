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

const level780 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "C", "D", "D", "B"],
    ["A", "C", "E", "E", "E", "E", "D", "B"],
    ["A", "C", "E", "F", "G", "E", "D", "B"],
    ["A", "C", "E", "F", "G", "E", "D", "B"],
    ["A", "C", "H", "F", "G", "G", "D", "B"],
    ["A", "C", "H", "F", "F", "G", "G", "B"],
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

export default level780;
