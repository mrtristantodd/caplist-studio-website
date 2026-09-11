const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
(async () => {
  for (const name of fs
    .readdirSync("docs/review")
    .filter((name) => /^static-.*\.png$/.test(name))) {
    await sharp(path.join("docs/review", name))
      .webp({ quality: 85 })
      .toFile(path.join("docs/review", name.replace(/\.png$/, ".webp")));
  }
  console.log(
    "Review screenshots compressed to WebP. Original PNG captures retained locally.",
  );
})();
