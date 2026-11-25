// One Line, One Laugh: Roast Your Fridge
// Writes a single roast of the fridge to /output/entry.txt.
// The entry must pass the sealed gate: UTF-8 text of 1 to 200
// characters, not only white space — validated here before writing.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The ice maker has one job and a union contract.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry length ${LINE.length} is outside the 1-200 gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote validated entry (${LINE.length} chars) to /output/entry.txt`);
