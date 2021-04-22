exports.onLoad = (req, res) => {
    // Validate request
    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while viewing the page."
    });
  else res.render();
};
