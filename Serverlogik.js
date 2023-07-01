const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const pathjson = "./Bestellungen.json"; 
const fs = require('fs');

app.use(bodyParser.json()); 

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const eta = require("eta");
app.engine("html", eta.renderFile);
app.set("view engine", "html");

app.post("/", (req, res) => {
  
  
  fs.readFile("public/Bestellungen.json", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let bestehendeDaten = [];
  
    if(data)
    {
      bestehendeDaten = JSON.parse(data);
    }
    
    console.log("Alt:", JSON.stringify(bestehendeDaten)); 
  
    const neueDaten = req.body;
    bestehendeDaten.push(neueDaten);
  
    const jsonDaten = JSON.stringify(bestehendeDaten, null, 2);
    console.log("Neu:", jsonDaten); 
  
    fs.writeFile("public/Bestellungen.json", jsonDaten, "utf8", (err) => {
      if (err) {
        console.log("Fehler bei der Speicherung ist aufgetreten");
        console.error(err);
        return;
      }
      console.log("Speichern erfolgreich");
    });
  });
});


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
