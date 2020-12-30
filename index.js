const express = require("express");
const bodyParser = require("body-parser");
const captureWebsite = require("capture-website");
const path = require("path");
var md5 = require("md5");

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

  console.log("**************** Screenshotting *********************");
  console.log(url);

  let fn = path.join(__dirname, "tmp", "/", md5(url) + ".png");

  console.log(fn);

  let img = await captureWebsite.file(url, fn, {
    width: 720,
    height: 480,
    fullPage: false,
    overwrite: true,
    cookies: [
      {
        domain: "learning.oreilly.com",
        name: "orm-jwt",
        value:
          "eyJhbGciOiAiUlMyNTYifQ.eyJhY2N0cyI6IFsiODI3ZjVjZWEtMDAwNy00Yzk2LWJiNzAtM2RmMjE1NWY5MzVlIiwgIjVkZTU5NWM3LWMzYjMtNDAwYy05MzU3LTg1MWI3NTdiMjkyNCJdLCAiZWlkcyI6IHsiZXhhY3R0YXJnZXQiOiAiaGVyb25fcHJvZF80MDE2MTkiLCAiaGVyb24iOiAiMDJlMWFkNzEtMjcwZi00OTk4LWJkOGEtY2IwZGI0ZTk3N2RlIn0sICJlbnYiOiAicHJvZHVjdGlvbiIsICJleHAiOiAxNjA5MzQ3MTYyLCAiaW5kaXZpZHVhbCI6IGZhbHNlLCAiaXNfc3RhZmYiOiB0cnVlLCAicGVybXMiOiB7ImFjYWRtIjogInYiLCAiYWNjbnQiOiAiY2V2IiwgImFwaWRjIjogInYiLCAiYXNpZ24iOiAiY2V2IiwgImNuZnJjIjogInYiLCAiY3ByZXgiOiAidiIsICJjc3N0ZCI6ICJ2IiwgImVwdWJzIjogInB2IiwgImxycHRoIjogInB2IiwgImx2dHJnIjogInYiLCAibnRia3MiOiAicHYiLCAib3Jpb2wiOiAicHYiLCAicGx5bHMiOiAiY2V2IiwgInNjbnJpbyI6ICJwdiIsICJ1c2FnZSI6ICJjdiIsICJ1c3JwZiI6ICJldiIsICJ2aWRlbyI6ICJwdiJ9LCAic3ViIjogImI0NTZjYmIzLTZjM2UtNDMwYS05MjgxLTI0ZTQzZmNiZGJlYyJ9.p0Fq9W67OnPM71mSxkpoUOy2txp7wFyGKQvyhCLB0KBsv9WIlKuI1f11aAW6ETxqy0BOf2qbI-mKDqtMsI4amJ5GkwX6Zj9U387_aGey_L9nTQEhpu8N8T1F7xbxe_3IUk03LfF4Z5HkSp-xstNCSUjoGNDwG4tF6zBxwvv0Py0",
      },
    ],
  });

  var options = {
    headers: {
      "Content-Type": "image/png",
    },
  };

  res.sendFile(fn, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", fn);
    }
  });
});

let server = app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
