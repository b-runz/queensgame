import {
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level621 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "A", "A", "A"],
    ["C", "A", "A", "A", "A", "A", "D", "A"],
    ["C", "C", "E", "D", "D", "D", "D", "A"],
    ["A", "C", "E", "E", "D", "D", "A", "A"],
    ["A", "C", "E", "E", "E", "D", "A", "F"],
    ["A", "C", "E", "E", "E", "D", "A", "F"],
    ["A", "C", "A", "A", "A", "D", "A", "A"],
    ["C", "C", "A", "G", "A", "H", "H", "A"],
    ["A", "A", "A", "G", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: bittersweet,
    E: altoMain,
    F: saharaSand,
    G: nomad,
    H: lightOrchid,
  },
  isNew: true,
};

export default level621;
