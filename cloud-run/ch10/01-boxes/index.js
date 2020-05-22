const {promisify} = require('util');
const exec = promisify(require('child_process').exec);
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Listening on port', port);
});

app.get('/', async (req, res) => {
  try {
    let message = req.query.message;
    console.log('Message: ' + message);
    const cmd='echo ' + message + ' | boxes -d boy';
    const {stdout, stderr} = await exec(cmd);
    if (stderr) {
      throw stderr;
    }
    res.status(200).send('<pre>' + stdout + '</pre>');
  }
  catch (ex) {
    console.log(`${ex}`);
    res.status(500);
  }
});
