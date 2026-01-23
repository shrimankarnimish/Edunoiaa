const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const APP_DIR = path.join(process.cwd(), "src", "app");



function renameRecursive(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);

    if (!fs.statSync(fullPath).isDirectory()) continue;

    const lower = item.toLowerCase();

    if (item !== lower) {
      const temp = `${lower}-temp`;

      console.log(`🔁 Renaming: ${item} → ${lower}`);

      execSync(`git mv "${fullPath}" "${path.join(dir, temp)}"`);
      execSync(`git mv "${path.join(dir, temp)}" "${path.join(dir, lower)}"`);
    }

    renameRecursive(path.join(dir, lower));
  }
}

console.log("🚀 Converting app routes to lowercase...\n");
renameRecursive(APP_DIR);
console.log("\n✅ Done. Now commit the changes.");
