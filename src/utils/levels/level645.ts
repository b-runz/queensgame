import {
  altoMain,
  anakiwa,
  chardonnay,
  saharaSand,
  bittersweet,
  celadon,
  lightWisteria,
  emerald
} from "../colors";

const level645 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "C", "C", "C", "D", "D"],
    ["A", "B", "B", "B", "B", "C", "B", "D"],
    ["A", "B", "B", "B", "B", "B", "B", "D"],
    ["E", "B", "B", "B", "B", "B", "B", "B"],
    ["E", "E", "E", "B", "B", "F", "F", "B"],
    ["G", "B", "B", "B", "B", "F", "B", "B"],
    ["G", "B", "B", "H", "B", "F", "B", "B"],
    ["G", "G", "B", "H", "H", "H", "B", "B"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: chardonnay,
    D: saharaSand,
    E: bittersweet,
    F: celadon,
    G: lightWisteria,
    H: emerald
  },
};

export default level645;
