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

const level764 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "A", "C", "C", "B", "B"],
    ["A", "A", "A", "A", "C", "C", "C", "D"],
    ["A", "A", "E", "F", "F", "F", "F", "D"],
    ["A", "A", "E", "G", "F", "H", "D", "D"],
    ["A", "E", "E", "G", "H", "H", "D", "D"],
    ["G", "G", "G", "G", "H", "D", "D", "D"]
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

export default level764;
