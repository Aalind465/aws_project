const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/ec2", require("./routes/ec2Routes.js"));


app.use("/s3", require("./routes/s3Routes.js"));

app.get("/", (req, res) => {
  res.send("AWS console");
});

app.listen(3000, (req, res) => {
  console.log("Server is listening");
});