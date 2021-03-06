const puppeteer = require("puppeteer");

const URL =
  "https://learning.oreilly.com/library/view/microservices-up-and/9781492075448/ch01.html#what-are-microservices:~:text=What%20Are%20Microservices%3F,design%20for%20failure%2C%20and%20evolutionary%20design.";

const JWT_COOKIE =
  "orm-jwt=eyJhbGciOiAiUlMyNTYifQ.eyJhY2N0cyI6IFsiODI3ZjVjZWEtMDAwNy00Yzk2LWJiNzAtM2RmMjE1NWY5MzVlIiwgIjVkZTU5NWM3LWMzYjMtNDAwYy05MzU3LTg1MWI3NTdiMjkyNCJdLCAiZWlkcyI6IHsiZXhhY3R0YXJnZXQiOiAiaGVyb25fcHJvZF80MDE2MTkiLCAiaGVyb24iOiAiMDJlMWFkNzEtMjcwZi00OTk4LWJkOGEtY2IwZGI0ZTk3N2RlIn0sICJlbnYiOiAicHJvZHVjdGlvbiIsICJleHAiOiAxNjA4Mzk0MjQ4LCAiaW5kaXZpZHVhbCI6IGZhbHNlLCAiaXNfc3RhZmYiOiB0cnVlLCAicGVybXMiOiB7ImFjYWRtIjogInYiLCAiYWNjbnQiOiAiY2V2IiwgImFwaWRjIjogInYiLCAiYXNpZ24iOiAiY2V2IiwgImNuZnJjIjogInYiLCAiY3ByZXgiOiAidiIsICJjc3N0ZCI6ICJ2IiwgImVwdWJzIjogInB2IiwgImxycHRoIjogInB2IiwgImx2dHJnIjogInYiLCAibnRia3MiOiAicHYiLCAib3Jpb2wiOiAicHYiLCAicGx5bHMiOiAiY2V2IiwgInNjbnJpbyI6ICJwdiIsICJ1c2FnZSI6ICJjdiIsICJ1c3JwZiI6ICJldiIsICJ2aWRlbyI6ICJwdiJ9LCAic3ViIjogImI0NTZjYmIzLTZjM2UtNDMwYS05MjgxLTI0ZTQzZmNiZGJlYyJ9.DUw3xLBEixV04xhmO4xwNiZbfDwBz8KE1Qzv8obzaWhtYU81IlCmwtBOgOHHx7eh4mRuA9uwjgjpN5IL8AZsoeuyl0C9MACVyygWRqp7jOlGs1yPoEHjp_kgPkjqSu0Sg367V8UVwtqkW-CKjIdNeSXLYeqOm7WLbFAVxY-mOxw";

const capture = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setCookie({ name: "orm-jwt", value: JWT_COOKIE });
  await page.goto(URL);
  await page.screenshot({ path: "./screenshot.png" });
  await browser.close();
};
capture();
