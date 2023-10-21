const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/router");

app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(router);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
