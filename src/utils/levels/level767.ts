import {
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  lightWisteria,
  celadon,
  saharaSand,
  emerald
} from "../colors";

const level767 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "B", "B", "B", "B", "B"],
    ["C", "C", "D", "D", "B", "E", "E", "B"],
    ["C", "D", "D", "D", "F", "F", "E", "E"],
    ["C", "C", "D", "D", "D", "F", "F", "E"],
    ["G", "C", "C", "H", "D", "F", "E", "E"],
    ["G", "G", "G", "H", "D", "E", "E", "D"],
    ["G", "H", "H", "H", "D", "D", "D", "D"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: chardonnay,
    E: lightWisteria,
    F: celadon,
    G: saharaSand,
    H: emerald
  },
};

export default level767;
