import {
  altoMain,
  anakiwa,
  lightWisteria,
  bittersweet,
  chardonnay,
  celadon,
  saharaSand
} from "../colors";

const level720 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "C", "C", "D", "D", "B"],
    ["A", "E", "E", "C", "C", "F", "B"],
    ["A", "C", "C", "C", "C", "F", "F"],
    ["A", "C", "C", "C", "C", "F", "F"],
    ["A", "C", "G", "C", "A", "A", "F"],
    ["A", "A", "A", "A", "A", "A", "F"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: lightWisteria,
    D: bittersweet,
    E: chardonnay,
    F: celadon,
    G: saharaSand
  },
};

export default level720;
