import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  saharaSand,
  lightWisteria
} from "../colors";

const level678 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "C", "C", "C", "A", "A"],
    ["B", "D", "C", "E", "C", "A", "F"],
    ["B", "D", "C", "C", "C", "A", "F"],
    ["B", "D", "G", "G", "C", "F", "F"],
    ["B", "D", "C", "C", "C", "F", "F"],
    ["B", "D", "D", "D", "D", "D", "F"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: saharaSand,
    G: lightWisteria
  },
};

export default level678;
