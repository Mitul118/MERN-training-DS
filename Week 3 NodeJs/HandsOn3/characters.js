const fs = require("fs");
const readable = fs.createReadStream("readit");
var data = "";
var chunck;
vowel = "aeiouAEIOU";
vowel = vowel.split("");
countVovel = 0;
countConsonant = 0;

readable.on("readable", function () {
  chunk = " ";
  while (chunk != null) {
    chunk = readable.read(1);
    var p = `${chunk}`;
    if (vowel.indexOf(p) != -1) {
      countVovel++;
    } else {
      countConsonant++;
    }
  }
});

readable.on("end", function () {
  console.log("vowel Count ", countVovel);
  console.log("Consonent Count ", countConsonant);
  var percentage = (countVovel / (countConsonant + countVovel)) * 100;
  console.log(`Percentage of vowel %i%`, percentage);
  percentage = (countConsonant / (countConsonant + countVovel)) * 100;
  console.log(`Percentage of Consonent %i%`, percentage);
});
