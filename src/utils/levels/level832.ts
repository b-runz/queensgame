import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
  emerald
} from "../colors";

const level832 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "B", "B", "B", "B", "C", "C"],
    ["D", "B", "B", "B", "B", "E", "E", "E"],
    ["D", "D", "D", "B", "B", "B", "B", "E"],
    ["F", "G", "G", "G", "B", "B", "B", "H"],
    ["F", "B", "B", "G", "B", "B", "B", "H"],
    ["F", "F", "B", "B", "B", "B", "H", "H"]
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: lightWisteria,
    G: saharaSand,
    H: emerald
  },
};

export default level832;
