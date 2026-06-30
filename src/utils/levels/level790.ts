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

const level790 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "A", "C", "C", "A", "D", "D"],
    ["B", "A", "A", "C", "A", "A", "D", "E"],
    ["B", "B", "A", "C", "C", "A", "D", "D"],
    ["B", "B", "F", "C", "C", "A", "D", "D"],
    ["G", "B", "F", "F", "C", "H", "H", "D"],
    ["B", "B", "H", "C", "C", "H", "D", "D"],
    ["H", "H", "H", "H", "H", "H", "H", "H"]
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

export default level790;
