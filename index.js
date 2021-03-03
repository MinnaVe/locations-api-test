const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));
const database = require("./database/crudrepository.js");

let customers = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Tina" },
];

app.get("/api/locations", (req, res) => {
  res.json(database.findAll());
});

app.get("/api/locations/:id([0-9]+)", (req, res) => {
  let id = Number(req.params.id);
  res.send(database.findById(id));
});

app.delete("/api/locations/:id([0-9]+)", (req, res) => {
  let id = Number(req.params.id);
  let deleteSuccessful = database.deleteById(id);
  console.log(deleteSuccessful);
  if (deleteSuccessful) {
    res.statusCode = 204;
    res.send();
  } else {
    res.statusCode = 404;
    res.send();
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
