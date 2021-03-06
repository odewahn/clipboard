const express = require("express");
const bodyParser = require("body-parser");
const captureWebsite = require("capture-website");
const path = require("path");
var md5 = require("md5");
const fs = require("fs");

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("dotenv").config();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// The URL to screenshot is passed as a URL encoded paramater called "url"
// Here's a test URL:
// http://localhost:3000/?url=https%3A%2F%2Flearning.oreilly.com%2Flibrary%2Fview%2Fmicroservices-up-and%2F9781492075448%2Fch01.html%23what-are-microservices%3A~%3Atext%3DWhat%2520Are%2520Microservices%253F%2Cdesign%2520for%2520failure%252C%2520and%2520evolutionary%2520design.

// Function to handle the root path
app.get("/screenshot", async function (req, res) {
  // Grab the pre-encoded URL paramater
  let url = req.query.url;

  // Use the md5 sha as the filename for the screenshot
  // This way we can tell if we've screenshotted and saved it previously
  // If so, we can just send back the file
  // If not, then use capture-website to grab the image and save it
  let fn = path.join(__dirname, "tmp", "/", md5(url) + ".png");
  console.log("**************** Fetching *********************");
  console.log(url);

  // Determine if the screenshotted file already exists
  fs.access(fn, fs.F_OK, async (err) => {
    if (err) {
      // if the file does not exist, then take the screenshot and save it
      console.log("Taking screeshot.");
      let img = await captureWebsite.file(url, fn, {
        width: 720,
        height: 480,
        fullPage: false,
        overwrite: true,
        cookies: [
          {
            domain: "learning.oreilly.com",
            name: "orm-jwt",
            value: process.env.ORM_JWT,
          },
        ],
      });
    }
    // Set the content type header
    var options = {
      headers: {
        "Content-Type": "image/png",
      },
    };
    // Send the file back to the browser as a png
    res.sendFile(fn, options, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Sent:", fn);
      }
    });
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

let server = app.listen(5000, function () {
  console.log("Server is listening on port 5000");
});
