const express =require('express');
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log(`Express app listening on port ${port}...`);
  });
app.get("/", function (req, res) {
    res.send(`<h1>Welcome from Express! </h1>
               <h3>Fast, unopinionated, minimalist web framework </h3>`);
  });