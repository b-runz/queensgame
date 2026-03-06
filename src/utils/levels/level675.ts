import {
  saharaSand,
  altoMain,
  anakiwa,
  lightWisteria,
  chardonnay,
  bittersweet,
  celadon,
  emerald,
  halfBaked
} from "../colors";

const level675 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "C", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "C", "A", "B", "B", "B", "D", "D", "D"],
    ["B", "B", "B", "B", "B", "B", "E", "E", "D"],
    ["B", "F", "F", "G", "B", "B", "E", "E", "E"],
    ["B", "G", "F", "G", "B", "B", "B", "B", "B"],
    ["B", "G", "G", "G", "H", "H", "I", "B", "B"],
    ["B", "B", "B", "B", "H", "H", "I", "B", "B"],
    ["B", "B", "B", "B", "I", "I", "I", "B", "B"]
  ],
  regionColors: {
    A: saharaSand,
    B: altoMain,
    C: anakiwa,
    D: lightWisteria,
    E: chardonnay,
    F: bittersweet,
    G: celadon,
    H: emerald,
    I: halfBaked
  },
};

export default level675;
