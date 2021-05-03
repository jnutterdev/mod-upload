const express = require('express');

module.exports = app => {
    const files = require("../controllers/files.controller.js");

    app.get("/files", files.onLoad);

    app.post("/files", files.uploadAFile);
};