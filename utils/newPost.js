const fs = require("fs");
const path = require("path");
const slugify = require("./slugify");

module.exports = async function main(title) {
  const now = new Date();

  const template =
    `export const meta = {\n` +
    `  publishDate: '${now.toISOString()}',\n` +
    `  title: '${title}'\n` +
    `}\n\n` +
    `${title}\n` +
    `==============\n` +
    `[Insert content here]`;

  const newPath = `${path.resolve("pages", "blog")}/${slugify(title)}.mdx`;
  await fs.promises.writeFile(newPath, template);
};
