import {
  altoMain,
  lightWisteria,
  chardonnay,
  saharaSand,
  anakiwa,
  bittersweet,
  celadon,
  emerald
} from "../colors";

const level670 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "B", "C", "D", "D", "D", "B"],
    ["A", "B", "C", "C", "C", "C", "D", "D"],
    ["A", "A", "C", "C", "C", "C", "C", "E"],
    ["F", "C", "C", "C", "C", "C", "E", "E"],
    ["F", "F", "C", "C", "C", "C", "E", "G"],
    ["H", "F", "F", "F", "C", "E", "E", "G"],
    ["H", "H", "H", "E", "E", "E", "G", "G"]
  ],
  regionColors: {
    A: altoMain,
    B: lightWisteria,
    C: chardonnay,
    D: saharaSand,
    E: anakiwa,
    F: bittersweet,
    G: celadon,
    H: emerald
  },
};

export default level670;
