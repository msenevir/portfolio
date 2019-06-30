#!/usr/bin/env node

const buildPosts = require("./buildPosts");
const newPost = require("./newPost");

require("yargs")
  .command(
    "build-posts",
    "compile mdx files",
    () => {},
    async () => await buildPosts()
  )
  .command(
    "new-post",
    "create a new post",
    yargs => {
      yargs
        .option("title", {
          describe: "title of the new post"
        })
        .demandOption(["title"]);
    },
    async argv => await newPost(argv.title)
  ).argv;
