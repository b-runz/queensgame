import {
  altoMain,
  saharaSand,
  lightWisteria,
  anakiwa,
  chardonnay,
  bittersweet,
  celadon,
  emerald,
  halfBaked
} from "../colors";

const level781 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C", "C"],
    ["D", "D", "A", "B", "C", "C", "E", "E", "E"],
    ["D", "D", "A", "B", "B", "E", "E", "F", "E"],
    ["A", "A", "A", "G", "B", "B", "F", "F", "E"],
    ["A", "H", "G", "G", "G", "B", "B", "F", "E"],
    ["A", "H", "G", "G", "G", "G", "B", "F", "E"],
    ["A", "A", "A", "G", "G", "G", "B", "F", "I"],
    ["G", "G", "G", "G", "G", "B", "B", "F", "I"],
    ["G", "G", "G", "G", "G", "B", "F", "F", "F"]
  ],
  regionColors: {
    A: altoMain,
    B: saharaSand,
    C: lightWisteria,
    D: anakiwa,
    E: chardonnay,
    F: bittersweet,
    G: celadon,
    H: emerald,
    I: halfBaked
  },
};

export default level781;
