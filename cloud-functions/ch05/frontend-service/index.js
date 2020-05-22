const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();

async function gcpCreatePayload(message) {
  const payload = Buffer.from(JSON.stringify(message));
  console.log ('Information passed: ' + message);
  await pubsub.topic('start-process').publish(payload);
}

exports.gcpSecureURL = async(req, res)=> {
  const message = req.query.message || req.body.message || 'google-cloud.png';
  await gcpCreatePayload(message);
  res.status(200).send('Creating a secure URL for:' + message);
}
