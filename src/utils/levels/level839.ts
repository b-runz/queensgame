import {
  altoMain,
  anakiwa,
  bittersweet,
  saharaSand,
  chardonnay,
  lightWisteria,
  celadon,
  emerald
} from "../colors";

const level839 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "A", "A", "A", "B", "C", "C"],
    ["A", "A", "A", "D", "A", "A", "A", "C"],
    ["A", "D", "D", "D", "D", "D", "A", "C"],
    ["A", "A", "D", "E", "D", "F", "F", "F"],
    ["A", "D", "D", "G", "D", "D", "H", "F"],
    ["A", "D", "G", "G", "G", "D", "H", "F"],
    ["G", "G", "G", "H", "H", "H", "H", "H"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: saharaSand,
    E: chardonnay,
    F: lightWisteria,
    G: celadon,
    H: emerald
  },
};

export default level839;
