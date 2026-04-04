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

const level704 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["C", "C", "A", "A", "B", "B", "B", "B"],
    ["D", "C", "C", "C", "E", "E", "B", "B"],
    ["D", "B", "E", "E", "E", "B", "B", "B"],
    ["D", "B", "B", "B", "B", "B", "B", "B"],
    ["D", "D", "F", "B", "G", "B", "H", "B"],
    ["D", "F", "F", "G", "G", "H", "H", "B"],
    ["D", "D", "F", "F", "G", "G", "H", "H"]
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

export default level704;
