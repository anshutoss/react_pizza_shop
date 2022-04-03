const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/config')
const colors = require('colors')
const morgan = require('morgan')

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.get("/", (req, res) => {
    res.send("<h1> Hello From Node Server vai nodemon</h1>");
});

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Server Running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`,bgMagenta.white);
    );
});