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

const level625 = {
  size: 7,
  colorRegions: [
    ["A", "B", "A", "A", "C", "C", "C", "D"],
    ["B", "B", "B", "A", "E", "E", "E", "D"],
    ["A", "A", "A", "A", "A", "E", "D", "D"],
    ["A", "A", "A", "A", "F", "F", "F", "D"],
    ["G", "A", "A", "A", "A", "F", "D", "D"],
    ["G", "G", "H", "A", "A", "D", "D", "A"],
    ["G", "H", "H", "H", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: nomad,
    B: celadon,
    C: bittersweet,
    D: saharaSand,
    E: anakiwa,
    F: chardonnay,
    G: lightWisteria,
    H: altoMain,
  },
  isNew: true,
};

export default level625;
