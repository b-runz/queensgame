import {
  altoMain,
  anakiwa,
  chardonnay,
  lightWisteria,
  bittersweet,
  celadon,
  saharaSand,
  emerald
} from "../colors";

const level710 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "C", "D", "D", "D"],
    ["A", "A", "B", "B", "C", "C", "D", "D"],
    ["E", "A", "F", "B", "B", "C", "G", "D"],
    ["E", "E", "F", "F", "B", "B", "G", "G"],
    ["E", "F", "F", "B", "B", "G", "G", "H"],
    ["F", "F", "B", "B", "G", "G", "B", "H"],
    ["F", "B", "B", "B", "G", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: chardonnay,
    D: lightWisteria,
    E: bittersweet,
    F: celadon,
    G: saharaSand,
    H: emerald
  },
};

export default level710;
