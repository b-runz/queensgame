import {
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  lightWisteria,
  celadon,
  saharaSand
} from "../colors";

const level789 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "C", "C", "C", "A", "B"],
    ["A", "D", "D", "C", "E", "E", "F"],
    ["A", "D", "D", "D", "D", "E", "F"],
    ["A", "D", "D", "D", "D", "D", "F"],
    ["A", "G", "G", "D", "G", "G", "F"],
    ["A", "A", "G", "G", "G", "F", "F"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: chardonnay,
    E: lightWisteria,
    F: celadon,
    G: saharaSand
  },
};

export default level789;
