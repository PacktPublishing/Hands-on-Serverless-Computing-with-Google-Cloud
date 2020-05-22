exports.gcpCreateSignedURL = (event, context)=> {
  // Get the file to be processed
  const payload = JSON.parse(Buffer.from(event.data, 'base64').toString());

  // Debug message
  console.log ('Creating a Signed URL: ' + payload);
}
