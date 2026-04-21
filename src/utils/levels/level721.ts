import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand
} from "../colors";

const level721 = {
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C"],
    ["A", "D", "E", "E", "E", "D", "C"],
    ["A", "D", "E", "E", "E", "D", "D"],
    ["D", "D", "D", "E", "D", "D", "D"],
    ["D", "D", "D", "D", "D", "D", "D"],
    ["D", "D", "F", "D", "G", "G", "D"],
    ["D", "D", "F", "D", "G", "G", "D"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: lightWisteria,
    G: saharaSand
  },
};

export default level721;
