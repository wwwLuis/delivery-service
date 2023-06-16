const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const eta = require("eta");
app.engine("html", eta.renderFile);
app.set("view engine", "html");

app.get("/", (_req, res) => {
  return res.render(path.join(__dirname, "Bestellbearbeitung.html"));
});

app.get("/Lieferdateien", (_req, res) => {
  return res.render(path.join(__dirname, "Lieferdateien.html"));
});



const port = 5002;
app.listen(port, () => {
  console.log("Server started on Port: " + port);
});
