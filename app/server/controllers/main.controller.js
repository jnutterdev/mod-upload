exports.onLoad = (req, res) => {
    // Validate request
    res.render('home', {title: "Welcome to node", subject: "a simple bootstrapped node project."});
};
