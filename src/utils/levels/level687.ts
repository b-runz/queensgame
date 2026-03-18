import {
  lightWisteria,
  chardonnay,
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  saharaSand,
  emerald
} from "../colors";

const level687 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["D", "E", "B", "E", "F", "C", "F", "C"],
    ["D", "E", "E", "E", "F", "F", "F", "C"],
    ["D", "D", "E", "G", "G", "F", "H", "H"],
    ["D", "D", "E", "G", "G", "F", "H", "H"],
    ["D", "E", "E", "E", "F", "F", "F", "H"],
    ["D", "E", "D", "E", "F", "D", "F", "H"],
    ["D", "D", "D", "D", "D", "D", "D", "H"]
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: altoMain,
    D: anakiwa,
    E: bittersweet,
    F: celadon,
    G: saharaSand,
    H: emerald
  },
};

export default level687;
