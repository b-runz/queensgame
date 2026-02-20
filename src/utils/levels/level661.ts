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

const level661 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C", "C"],
    ["A", "D", "A", "B", "C", "B", "B", "C"],
    ["D", "D", "A", "B", "B", "B", "B", "C"],
    ["D", "A", "A", "B", "B", "C", "C", "C"],
    ["D", "A", "E", "B", "E", "C", "F", "F"],
    ["D", "G", "E", "E", "E", "C", "F", "F"],
    ["D", "E", "E", "E", "E", "H", "F", "F"],
    ["D", "D", "D", "D", "D", "D", "F", "F"]
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

export default level661;
