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

const level723 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "D", "D"],
    ["A", "A", "A", "C", "C", "D", "D", "D"],
    ["A", "C", "C", "C", "D", "D", "D", "E"],
    ["A", "C", "C", "D", "D", "D", "F", "E"],
    ["G", "G", "D", "D", "D", "E", "E", "E"],
    ["G", "D", "D", "D", "E", "E", "E", "H"],
    ["D", "D", "D", "E", "E", "E", "H", "H"],
    ["D", "D", "H", "H", "H", "H", "H", "H"]
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

export default level723;
