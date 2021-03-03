const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));
//const server = app.listen(port, () => { .. })

let customers = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Tina" },
];

let locations = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];
// HTTP GET http://localhost:8080/api/customers
app.get("/api/customers", (req, res) => {
  res.send(customers);
});

// HTTP GET http://localhost:8080/api/locations/1
app.get("/api/locations/:id([0-9]+)", (req, res) => {
  let id = Number(req.params.id);
  let location = locations.find((location) => location.id === id);
  res.send(location);
});

// HTTP GET http://localhost:8080/api/locations
app.get("/api/locations", (req, res) => {
  var str = JSON.stringify(locations, null, 2);
  res.type("application/json");
  res.send(str);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
