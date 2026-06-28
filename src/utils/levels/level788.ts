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

const level788 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "C", "C", "C"],
    ["D", "D", "D", "D", "A", "B", "B", "C", "C"],
    ["E", "E", "E", "D", "A", "B", "B", "C", "C"],
    ["C", "C", "E", "D", "A", "B", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["C", "F", "F", "F", "F", "F", "F", "F", "F"],
    ["C", "F", "G", "G", "G", "G", "G", "G", "F"],
    ["C", "F", "G", "H", "H", "H", "H", "G", "F"],
    ["C", "F", "G", "H", "I", "I", "H", "G", "F"]
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

export default level788;
