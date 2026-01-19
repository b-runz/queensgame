import {
  altoMain,anakiwa,bittersweet,celadon,chardonnay,lightWisteria,nomad,saharaSand,
} from "../colors";

const level626 = {
  size: 8,
  colorRegions: [
    ["H", "H", "H", "H", "H", "F", "G", "G"],
    ["H", "D", "H", "H", "F", "F", "F", "G"],
    ["D", "D", "D", "H", "C", "C", "C", "G"],
    ["H", "H", "H", "H", "H", "C", "G", "G"],
    ["H", "H", "H", "H", "B", "B", "B", "G"],
    ["A", "H", "H", "H", "H", "B", "G", "G"],
    ["A", "A", "E", "H", "H", "G", "G", "H"],
    ["A", "E", "E", "E", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
  },
};

export default level626;
