let Parser = require('rss-parser');
let parser = new Parser();

// New background function - Async
async function asyncBBCFeed(req, res) {
    let feed = await parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml');
    console.log (feed.title);
    var testString = '';
    // Title
    testString = '<h1>RSS Lab</h1></p>'
  
    // Loop through the content
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link);
     // Create a link per title
     testString = testString + '<a href="' + item.link + '">'+item.title + '</a>' + '</br>';
    });
    // Display the feed returned
    res.status(200).send(testString);
}

/**
* Responds to any HTTP request.
*
* @param {!express:Request} req HTTP request context.
* @param {!express:Response} res HTTP response context.
*/
exports.helloRSS = (req, res) => {
  var testMessage='';
  console.log('helloRSS - display some info');
  asyncBBCFeed(req,res);
};
