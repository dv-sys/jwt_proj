require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express();
const auth = require("./middleware/auth");
const register = require('./controllers/register');
const login = require('./controllers/login');

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome to Home page");
});


module.exports = app;