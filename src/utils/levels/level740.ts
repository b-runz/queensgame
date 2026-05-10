import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level740 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "C", "C", "C"],
    ["A", "D", "A", "A", "B", "B", "B", "C", "C"],
    ["A", "D", "A", "B", "B", "E", "B", "B", "C"],
    ["A", "D", "B", "B", "E", "E", "E", "B", "B"],
    ["A", "D", "D", "B", "B", "E", "B", "B", "F"],
    ["A", "A", "D", "D", "B", "B", "B", "F", "F"],
    ["A", "G", "D", "D", "D", "B", "F", "F", "H"],
    ["G", "G", "G", "D", "D", "F", "F", "H", "H"],
    ["I", "G", "D", "D", "D", "H", "H", "H", "H"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: lightWisteria,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level740;
