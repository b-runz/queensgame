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

const level729 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "D", "E", "E", "E"],
    ["A", "B", "C", "C", "D", "E", "E", "E"],
    ["A", "B", "C", "D", "D", "E", "E", "E"],
    ["A", "A", "A", "F", "F", "G", "H", "E"],
    ["A", "A", "A", "F", "G", "G", "H", "E"],
    ["A", "A", "A", "F", "G", "H", "H", "E"],
    ["A", "A", "A", "A", "A", "A", "A", "E"],
    ["A", "E", "E", "E", "E", "E", "E", "E"]
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

export default level729;
