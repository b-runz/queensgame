import {
  saharaSand,
  altoMain,
  lightWisteria,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  emerald
} from "../colors";

const level713 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "D", "D", "D", "D", "C", "C"],
    ["A", "A", "D", "E", "D", "D", "D", "C"],
    ["A", "D", "D", "D", "D", "F", "D", "C"],
    ["G", "D", "D", "H", "D", "D", "D", "C"],
    ["G", "D", "H", "H", "D", "D", "C", "C"],
    ["G", "D", "D", "D", "D", "D", "C", "C"],
    ["G", "G", "G", "G", "C", "C", "C", "C"]
  ],
  regionColors: {
    A: saharaSand,
    B: altoMain,
    C: lightWisteria,
    D: anakiwa,
    E: bittersweet,
    F: celadon,
    G: chardonnay,
    H: emerald
  },
};

export default level713;
