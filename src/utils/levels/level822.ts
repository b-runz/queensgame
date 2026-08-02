import {
  altoMain,
  anakiwa,
  saharaSand,
  chardonnay,
  lightWisteria,
  bittersweet,
  celadon,
  emerald,
  halfBaked
} from "../colors";

const level822 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C", "D"],
    ["D", "D", "D", "A", "B", "B", "C", "E", "D"],
    ["D", "D", "F", "F", "B", "B", "C", "E", "D"],
    ["D", "D", "D", "F", "B", "B", "E", "E", "D"],
    ["D", "G", "G", "F", "F", "B", "B", "E", "D"],
    ["D", "G", "B", "B", "B", "B", "B", "H", "D"],
    ["D", "G", "B", "I", "I", "I", "B", "H", "D"],
    ["D", "G", "I", "I", "D", "H", "H", "H", "D"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: saharaSand,
    D: chardonnay,
    E: lightWisteria,
    F: bittersweet,
    G: celadon,
    H: emerald,
    I: halfBaked
  },
};

export default level822;
