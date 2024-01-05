require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const connectDB = require("./Utils/db");
const router = require("./Route/router");

app.use(express.json());
app.use("/user", router);

connectDB().then(
  app.listen(port, () => {
    console.log(`server running successfully on http://localhost:${port}`);
  })
);
