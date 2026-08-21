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

const level841 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C"],
    ["D", "A", "B", "B", "B", "B", "C", "C"],
    ["D", "A", "E", "B", "B", "C", "C", "C"],
    ["D", "D", "E", "E", "B", "C", "C", "C"],
    ["D", "D", "D", "E", "E", "C", "C", "C"],
    ["D", "F", "D", "D", "D", "G", "G", "G"],
    ["H", "F", "F", "D", "D", "G", "G", "G"],
    ["H", "F", "F", "F", "D", "G", "G", "G"]
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

export default level841;
