Add a textFragment Anchor to the OURN spec, like this:

```
urn:orm:book:9781492036432:chapter:xhtml%2fch01.xhtml#:-:text=my%20starting%20search%term,my%20end20term
```

Google chrome extension for linking to a text fragment:

- https://github.com/GoogleChromeLabs/link-to-text-fragment

Background reading:

- https://wicg.github.io/scroll-to-text-fragment/

- https://web.dev/text-fragments/

https://learning.oreilly.com/library/view/microservices-up-and/9781492075448/ch02.html#idm46223582221032:~:text=model.-,Designing

https://wicg.github.io/scroll-to-text-fragment/#status:~:text=This%20specification%20was%20published%20by%20the,about%20W3C%20Community%20and%20Business%20Groups.

# Notes

On the platform pages, you may need to set up a keyboard shortcut in google chrome so that the `link-to-text-fragment` extension will work properly

```
chrome://extensions/shortcuts
```

https://learning.oreilly.com/library/view/microservices-up-and/9781492075448/ch02.html#idm46223582018888:~:text=Taken%20together%2C%20the%20decisions%2C%20team%20definitions%2C,system%20design%2C%20and%20release%20teams%20provide.

Here it is in the UCV:

https://learning.oreilly.review/ucv-books/hands-on-machine-learning/9781492032632/ch16.xhtml#idm45746441809992:~:text=How%20to%20Split%20a%20Sequential%20Dataset,generalization%20error%20will%20be%20optimistically%20biased.

https://learning.oreilly.review/ucv-books/hands-on-machine-learning/9781492032632/preface01.xhtml#idm45746503873096:~:text=Rather%20than%20implementing%20our%20own%20toy,online%20as%20Jupyter%20notebooks%20at%20https%3A%2F%2Fgithub.com%2Fageron%2Fhandson%2Dml2.

## Generating a preview thumbnail

Since we don't have an embed, what if you could make a cool thumbnail generator that would show a preview of the snippet? Then you could click on the link or image and it would take you right to where to where you want to go.

Looks like PhantomJS is no longer a thing, so people are using google chrome, which now has a headless capability.

- [https://github.com/puppeteer/puppeteer](This is a huge project that can do practally anything; many other screen capture tools seem to be a wrapper around this.)

- [https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer]Good tutorial on pupeteer

- [https://github.com/sindresorhus/pageres](Sindre Sourhus project to convert URLs to images)

- [https://www.npmjs.com/package/capture-website](Another Sindre Sourhus project to convert URLs to images)

- [http://tutorialshares.com/take-website-screenshots-command-line-mac/](Rando tutorial)

- https://tecadmin.net/capture-screenshot-google-chrome-headless/

```
google-chrome --headless --disable-gpu --print-to-pdf=file1.png http://www.example.com/
```

Here are all the chrome/puppeteer launch options:

https://github.com/puppeteer/puppeteer/blob/v5.5.0/docs/api.md#puppeteerlaunchoptions

- [https://github.com/puppeteer/examples/blob/master/element-to-pdf.js#L92](How to getnerate an `<img>` link on the fly)

## Deploying dev on Heroku

https://daveceddia.com/deploy-react-express-app-heroku/

https://www.codementor.io/@rajjeet/step-by-step-how-to-add-redux-to-a-react-app-11tcgslmvi
