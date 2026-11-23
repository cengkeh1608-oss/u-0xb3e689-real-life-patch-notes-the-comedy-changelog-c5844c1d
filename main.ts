import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// D10 menang 25/25 dari 14 draf: lidah menggigit dirinya sendiri di titik yang
// sama, berulang kali — bug tubuh paling universal dan paling menyakitkan-lucu.
// "repeatedly, in the same spot" adalah punch-nya; register release note murni.
const TEXT =
  "v1.3.9: fixed a bug where the tongue bit itself while chewing, repeatedly, in the same spot.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT);
