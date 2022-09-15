const { pipeline } = require("stream");
const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

pipeline(
  fs.createReadStream("readit","utf-8"),
  // zlib.createGzip(),  //uncomment to use zip
  fs.createWriteStream("writeit","utf-8"),
  (err) => {
    if (err) {
      console.error("pipeline failed", err);
    } else {
      console.log("pipeline succeeded !!");
    }
  }
);
