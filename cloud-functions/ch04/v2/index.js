exports.helloWorldLocal = (req, res) => {
    res.send('Hello, Functions Framework from a local machine');
};

exports.helloWorldCloud = (req, res) => {
    res.send('Hello, Functions Framework from a GCP cloud project');
};
