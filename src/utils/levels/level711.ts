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

const level711 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "A", "A", "A", "A", "A", "C"],
    ["B", "D", "A", "A", "A", "A", "E", "C"],
    ["B", "D", "F", "A", "A", "G", "E", "C"],
    ["B", "D", "F", "H", "A", "G", "E", "C"],
    ["B", "D", "H", "H", "A", "G", "E", "C"],
    ["B", "H", "H", "H", "A", "A", "E", "C"],
    ["H", "H", "H", "A", "A", "A", "A", "C"]
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

export default level711;
