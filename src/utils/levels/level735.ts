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

const level735 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["C", "C", "A", "A", "B", "B", "D", "D"],
    ["C", "A", "A", "A", "A", "B", "D", "E"],
    ["C", "C", "A", "F", "F", "G", "D", "D"],
    ["H", "C", "A", "F", "G", "G", "G", "D"],
    ["C", "C", "A", "F", "F", "G", "D", "D"],
    ["A", "A", "A", "A", "F", "G", "G", "G"],
    ["A", "A", "A", "F", "F", "G", "G", "G"]
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

export default level735;
