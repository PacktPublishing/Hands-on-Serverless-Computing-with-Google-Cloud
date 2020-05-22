var data = require('./data/films.json');
var pug = require('pug');

function filmDetail(req,res, movieRef) {
  const pugInputFile = pug.compileFile('views/index.pug');

  res.status(200).send(pugInputFile({
    items: data.movies[movieRef]
  }));
}

exports.filmAPI = (req, res) => {
  let filmNum = req.query.film || '00';

  var movieRef = parseInt(filmNum, 10);

  if (movieRef > 3 || movieRef < 0)
    movieRef = 0;

  filmDetail(req, res, movieRef);
}
