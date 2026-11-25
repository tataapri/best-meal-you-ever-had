import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, written fresh for this entry. Fixed string: the exact same
// bytes on every run — no randomness, no date, no environment, no input.
const SENTENCE =
  "On my grandmother's porch as the rain came down, I ate rendang so dark and tender it fell apart on the spoon, and the coconut smoke from the wood fire still smells like home.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
