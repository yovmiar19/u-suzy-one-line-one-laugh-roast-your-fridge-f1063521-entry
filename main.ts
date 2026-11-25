// One Line, One Laugh: Roast Your Fridge
// Writes a single roast of the fridge to /output/entry.txt.
// The entry must pass the sealed gate: UTF-8 text of 1 to 200
// characters, not only white space — validated here before writing.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My fridge light comes on like a spotlight just so the week-old rice can watch me give up and order delivery.";
// The joke: the fridge light stages a little drama — a spotlight on the
// week-old rice — just to witness the owner surrendering to delivery.

if (LINE.includes("\n")) {
  throw new Error("Entry must be a single line");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry length ${LINE.length} is outside the 1-200 gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote validated entry (${LINE.length} chars) to /output/entry.txt`);
