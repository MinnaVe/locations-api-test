const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));
//const server = app.listen(port, () => { .. })

let customers = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Tina" },
]; // HTTP GET http://localhost:8080/api/customers

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.get("/api/customers", (req, res) => {
  res.send(customers);
});

app.get("/api/locations", (req, res) => {
  res.send(database);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
