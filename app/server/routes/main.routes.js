const express = require('express');


module.exports = app => {
    const mainpage = require("../controllers/main.controller.js");

    app.get("/", mainpage.onLoad);
}