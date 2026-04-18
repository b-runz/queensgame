import {
  lightWisteria,
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  celadon,
  saharaSand,
  emerald,
  halfBaked
} from "../colors";

const level718 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "C", "C"],
    ["A", "D", "D", "A", "B", "B", "C", "C", "C"],
    ["D", "D", "C", "C", "C", "C", "C", "C", "E"],
    ["F", "D", "C", "G", "H", "H", "C", "E", "E"],
    ["F", "F", "C", "G", "H", "H", "C", "E", "I"],
    ["F", "F", "C", "G", "G", "H", "C", "E", "I"],
    ["F", "C", "C", "C", "C", "C", "C", "I", "I"],
    ["C", "C", "C", "I", "I", "I", "I", "I", "I"],
    ["C", "C", "I", "I", "I", "I", "I", "I", "I"]
  ],
  regionColors: {
    A: lightWisteria,
    B: altoMain,
    C: anakiwa,
    D: bittersweet,
    E: chardonnay,
    F: celadon,
    G: saharaSand,
    H: emerald,
    I: halfBaked
  },
};

export default level718;
