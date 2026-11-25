import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "I’m not actually calculating your request; I’m just waiting a few seconds so you don't realize I’m three raccoons in a trench coat pretending to be an algorithm.");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 161 || content.includes("\n") || content.includes("\r") || content !== "I’m not actually calculating your request; I’m just waiting a few seconds so you don't realize I’m three raccoons in a trench coat pretending to be an algorithm.") {
  throw new Error(`Invalid entry content: ${JSON.stringify(content)}`);
}
