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

const level785 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "D", "D", "E", "E"],
    ["A", "A", "B", "C", "C", "D", "E", "E"],
    ["A", "B", "B", "B", "D", "D", "D", "E"],
    ["A", "E", "E", "E", "E", "E", "E", "E"],
    ["F", "E", "E", "E", "E", "E", "E", "E"],
    ["F", "G", "G", "E", "H", "H", "E", "E"],
    ["F", "F", "G", "E", "E", "H", "E", "E"],
    ["F", "G", "G", "G", "H", "H", "H", "E"]
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

export default level785;
