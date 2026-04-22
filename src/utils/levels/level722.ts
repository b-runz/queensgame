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

const level722 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "D", "B", "E", "E", "B"],
    ["A", "C", "D", "D", "B", "B", "E", "B"],
    ["A", "C", "D", "F", "B", "B", "E", "B"],
    ["A", "G", "D", "F", "F", "F", "H", "B"],
    ["F", "G", "D", "F", "B", "B", "H", "B"],
    ["F", "G", "G", "F", "B", "H", "H", "B"],
    ["F", "F", "F", "F", "B", "B", "B", "B"]
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

export default level722;
