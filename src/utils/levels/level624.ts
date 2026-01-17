import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level624 = {
  size: 7,
  colorRegions: [
    ["A", "A", "B", "C", "C", "D", "E", "E"],
    ["A", "B", "B", "C", "C", "D", "D", "E"],
    ["A", "C", "C", "C", "F", "E", "E", "E"],
    ["A", "C", "C", "G", "F", "E", "E", "E"],
    ["A", "H", "H", "G", "G", "H", "H", "A"],
    ["A", "A", "H", "H", "H", "H", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: nomad,
    B: lightWisteria,
    C: altoMain,
    D: chardonnay,
    E: saharaSand,
    F: anakiwa,
    G: bittersweet,
    H: celadon,
  },
  isNew: true,
};

export default level624;
