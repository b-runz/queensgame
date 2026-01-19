import {
  altoMain,
  anakiwa,
  celadon,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level620 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "A", "A", "A"],
    ["A", "C", "A", "B", "A", "D", "A"],
    ["A", "C", "A", "A", "A", "E", "A"],
    ["A", "C", "C", "E", "E", "E", "A"],
    ["A", "C", "A", "A", "A", "E", "A"],
    ["A", "C", "A", "F", "A", "E", "A"],
    ["A", "A", "A", "F", "A", "A", "A"],
  ],
  regionColors: {
    A: altoMain,
    B: lightWisteria,
    C: celadon,
    D: saharaSand,
    E: nomad,
    F: anakiwa,
  },
};

export default level620;
