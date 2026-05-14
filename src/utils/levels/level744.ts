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

const level744 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "D", "D", "E", "E"],
    ["A", "B", "C", "C", "D", "E", "E", "E"],
    ["C", "B", "C", "C", "D", "E", "E", "E"],
    ["C", "B", "B", "C", "D", "D", "E", "E"],
    ["C", "C", "C", "C", "C", "E", "E", "E"],
    ["F", "C", "G", "G", "C", "H", "H", "E"],
    ["F", "F", "G", "C", "C", "H", "E", "E"],
    ["F", "F", "G", "G", "C", "H", "H", "E"]
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

export default level744;
