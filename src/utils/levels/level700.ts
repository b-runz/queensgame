import {
  saharaSand,
  chardonnay,
  lightWisteria,
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  emerald
} from "../colors";

const level700 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["B", "C", "B", "D", "E", "E", "E", "B"],
    ["B", "C", "B", "D", "B", "B", "F", "B"],
    ["B", "C", "B", "G", "G", "B", "F", "B"],
    ["B", "C", "B", "G", "G", "B", "F", "B"],
    ["B", "C", "B", "B", "B", "B", "F", "B"],
    ["B", "C", "H", "H", "H", "H", "F", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B"]
  ],
  regionColors: {
    A: saharaSand,
    B: chardonnay,
    C: lightWisteria,
    D: altoMain,
    E: anakiwa,
    F: bittersweet,
    G: celadon,
    H: emerald
  },
};

export default level700;
