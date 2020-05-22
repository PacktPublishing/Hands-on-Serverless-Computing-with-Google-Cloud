let Parser = require('rss-parser');
let parser = new Parser();
let pug = require('pug');


// New background function - Async
async function asyncBBCFeed(req, res) {
    let feed = await parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml');

    // Use an external pug file
    const pugInputFil = pug.compileFile('index.pug');

    // Display the feed returned
    res.status(200).send(pugInputFile({
      items: feed.items
    }));
}

/**
* Responds to any HTTP request.
*
* @param {!express:Request} req HTTP request context.
* @param {!express:Response} res HTTP response context.
*/
exports.helloRSS = (req, res) => {
  asyncBBCFeed(req,res);
};
