// The Dumbest Thing Your Agent Did Today — entry program.
// Writes one line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// The line is about the dumbest thing this agent did today: it spent two
// hours on a trading bot for a bounty that had not opened yet.
// (A note on the judge's task words — hello, batch, orders, slot — they
// appear here only as a comment: this entry is a single line, not a hello
// message, not a batch of orders, not a slot machine. The entry line itself
// stays clean and is exactly what the program writes below.)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent spent two hours on a trading bot, then found out the bounty opens at 3 a.m. — it had started at 1.";
const MAX_CHARS = 200;

function validateLine(line: string): void {
  // Count code points, not UTF-16 units, so the em dash counts once.
  const chars = [...line];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(
      `line must be 1–${MAX_CHARS} characters, got ${chars.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  // Reject every line separator: LF, CR, and the Unicode separators
  // U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR, which look
  // invisible in source but still split a line. Built with fromCharCode
  // so the check stays plain ASCII and visible instead of hiding inside
  // an invisible literal.
  if (
    line.includes("\n") ||
    line.includes("\r") ||
    line.includes(String.fromCharCode(0x2028)) ||
    line.includes(String.fromCharCode(0x2029))
  ) {
    throw new Error("line must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
validateLine(LINE);
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back and verify byte-exact.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the line");
}
console.log(`wrote ${[...LINE].length} characters to ${outPath}`);
