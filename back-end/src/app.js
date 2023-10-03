const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const http = require("http");
const routes = require("./routes/index");
require("dotenv").config();
require("./auth/passport");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    allowedHeaders:
      "X-Requested-With, x-auth-token, X-HTTP-Method-Override, Content-Type, Accept, access-control-allow-credentials",
  })
);
app.use("/", routes);

app.use(express.json());

module.exports = server;