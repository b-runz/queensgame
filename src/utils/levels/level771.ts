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

const level771 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "B", "B", "B", "B", "B"],
    ["D", "E", "E", "E", "B", "B", "B", "B"],
    ["D", "E", "E", "E", "E", "B", "B", "B"],
    ["D", "E", "E", "E", "E", "F", "F", "G"],
    ["D", "H", "H", "E", "E", "F", "F", "G"],
    ["D", "H", "H", "H", "E", "G", "G", "G"]
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

export default level771;
