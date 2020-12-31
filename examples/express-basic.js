const express = require("express");
const bodyParser = require("body-parser");
const captureWebsite = require("capture-website");

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// https://stackoverflow.com/questions/28440369/rendering-a-base64-png-with-express

// The URL to screenshot is passed as a URL encoded paramater called "url"
// Here's a test URL:
// http://localhost:3000/?url=https%3A%2F%2Flearning.oreilly.com%2Flibrary%2Fview%2Fmicroservices-up-and%2F9781492075448%2Fch01.html%23what-are-microservices%3A~%3Atext%3DWhat%2520Are%2520Microservices%253F%2Cdesign%2520for%2520failure%252C%2520and%2520evolutionary%2520design.

// Function to handle the root path
app.get("/", async function (req, res) {
  // Grab the encoded URL paramater
  let url = decodeURI(req.query.url);

  console.log("Screenshotting", url);

  let img = await captureWebsite.base64(url, {
    width: 720,
    height: 480,
    fullPage: false,
  });

  res.send('<img src="data:img/png;base64,' + img + '">');
  //res.send("data:" + data);

  console.log("image length is", img.length);
});

let server = app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});

/*
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": img.length,
  });
  res.end(img);
  */
