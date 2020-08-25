const express = require("express");
const configuredb = require("./config/database");
const router = require("./config/route");

const app = express();
const port = 3075;

configuredb();
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("server is running on port", port);
});
