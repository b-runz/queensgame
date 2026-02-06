import {
  altoMain,
  saharaSand,
  lightWisteria,
  chardonnay,
  anakiwa,
  bittersweet,
  celadon,
  emerald
} from "../colors";

const level647 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "D", "D", "E", "E", "E", "C"],
    ["A", "D", "F", "F", "F", "F", "E", "C"],
    ["G", "E", "F", "H", "H", "F", "E", "C"],
    ["G", "E", "F", "H", "H", "F", "E", "C"],
    ["G", "E", "F", "F", "F", "F", "E", "C"],
    ["G", "E", "E", "E", "E", "E", "E", "C"],
    ["G", "G", "G", "C", "C", "C", "C", "C"]
  ],
  regionColors: {
    A: altoMain,
    B: saharaSand,
    C: lightWisteria,
    D: chardonnay,
    E: anakiwa,
    F: bittersweet,
    G: celadon,
    H: emerald
  },
};

export default level647;
