const crawler = require('./wertgarantieTestCrawler');
const overview = require('./testOverview');


const result = crawler.toMarkdown(overview);
console.log(result);
