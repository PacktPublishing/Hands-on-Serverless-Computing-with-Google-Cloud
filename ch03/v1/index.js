/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloRSS = (req, res) => {
  console.log('helloRSS - display some info');
  res.status(200).send('helloRSS');
};
