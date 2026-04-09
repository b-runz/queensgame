import {
  altoMain,
  lightWisteria,
  anakiwa,
  bittersweet,
  chardonnay,
  celadon,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level709 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "C", "D", "E", "E", "E"],
    ["A", "B", "C", "C", "C", "D", "E", "E", "E"],
    ["A", "B", "C", "C", "C", "D", "E", "E", "E"],
    ["A", "B", "B", "B", "C", "D", "D", "D", "E"],
    ["C", "C", "C", "C", "C", "E", "E", "E", "E"],
    ["F", "G", "G", "G", "C", "H", "H", "H", "E"],
    ["F", "F", "G", "C", "C", "H", "I", "H", "E"],
    ["F", "F", "G", "C", "C", "H", "H", "H", "E"],
    ["F", "G", "G", "G", "C", "H", "E", "E", "E"]
  ],
  regionColors: {
    A: altoMain,
    B: lightWisteria,
    C: anakiwa,
    D: bittersweet,
    E: chardonnay,
    F: celadon,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level709;
