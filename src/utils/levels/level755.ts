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

const level755 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "A", "A", "D", "B", "B", "B"],
    ["C", "C", "C", "D", "D", "D", "B", "B"],
    ["C", "C", "C", "D", "D", "D", "E", "B"],
    ["C", "C", "C", "D", "F", "D", "E", "B"],
    ["C", "C", "G", "D", "F", "D", "E", "B"],
    ["H", "C", "G", "D", "F", "D", "E", "B"]
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

export default level755;
