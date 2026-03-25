import {
  saharaSand,
  lightWisteria,
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  emerald
} from "../colors";

const level694 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "D"],
    ["A", "A", "A", "B", "B", "B", "C", "D"],
    ["D", "D", "D", "C", "C", "C", "C", "D"],
    ["D", "E", "E", "F", "F", "C", "C", "D"],
    ["D", "E", "E", "E", "E", "D", "D", "D"],
    ["D", "E", "G", "G", "G", "D", "D", "D"],
    ["D", "D", "H", "H", "H", "D", "D", "D"],
    ["D", "D", "D", "D", "D", "D", "D", "D"]
  ],
  regionColors: {
    A: saharaSand,
    B: lightWisteria,
    C: altoMain,
    D: anakiwa,
    E: bittersweet,
    F: celadon,
    G: chardonnay,
    H: emerald
  },
};

export default level694;
