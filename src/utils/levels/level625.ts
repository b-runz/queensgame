import {
  altoMain,anakiwa,bittersweet,celadon,chardonnay,lightWisteria,nomad,saharaSand,
} from "../colors";

const level625 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "H", "H", "H", "G"],
    ["A", "A", "A", "A", "H", "H", "H", "G"],
    ["A", "A", "A", "A", "H", "H", "G", "G"],
    ["A", "A", "A", "A", "B", "G", "G", "F"],
    ["B", "B", "B", "B", "B", "E", "G", "F"],
    ["D", "D", "C", "E", "E", "E", "F", "F"],
    ["D", "C", "C", "E", "F", "F", "F", "F"],
    ["D", "C", "F", "F", "F", "F", "F", "F"],
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

export default level625;
