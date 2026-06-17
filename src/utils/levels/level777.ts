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

const level777 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["C", "D", "D", "A", "E", "E", "E", "B"],
    ["C", "C", "D", "A", "F", "F", "E", "B"],
    ["C", "C", "D", "A", "F", "F", "E", "B"],
    ["C", "C", "D", "A", "F", "E", "E", "B"],
    ["C", "C", "D", "A", "F", "G", "E", "H"],
    ["C", "D", "D", "D", "G", "G", "E", "H"],
    ["C", "C", "G", "G", "G", "G", "H", "H"]
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

export default level777;
