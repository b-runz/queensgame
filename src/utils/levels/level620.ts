import {
  altoMain,anakiwa,bittersweet,celadon,chardonnay,lightWisteria,nomad,saharaSand,
} from "../colors";

const level620 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "A"],
    ["F", "E", "E", "E", "A", "E", "E", "E", "A"],
    ["F", "E", "D", "E", "A", "E", "G", "E", "A"],
    ["F", "E", "D", "E", "E", "E", "H", "E", "A"],
    ["F", "E", "D", "D", "H", "H", "H", "E", "A"],
    ["F", "E", "D", "E", "E", "E", "H", "E", "A"],
    ["F", "E", "D", "E", "C", "E", "H", "E", "C"],
    ["F", "E", "E", "E", "C", "E", "E", "E", "C"],
    ["F", "F", "F", "C", "C", "C", "C", "C", "C"],
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

export default level620;
