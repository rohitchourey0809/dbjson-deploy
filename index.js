var fs = require("fs");
var data = fs.readFileSync("db.json");
var elements = JSON.parse(data);
const express = require("express");
const app = express();
const cors = require("cors");

app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

app.use(express.static("public"));
app.use(cors());
app.get("/Shopping", Shopping);
function Shopping(request, response) {
  response.send(elements.Shopping);
}
app.post("/Shopping", Shopping);
function Shopping(request, response) {
  response.send(elements.Shopping);
}

app.get("/Shopping/:id", Shopping);
function Shopping(request, response) {
  var word = request.paramss.id;
  console.log(word);
  if (word) {
    response.send(elements.Shopping[word]);
  }
}

app.post("/Shopping/card", card);

function card(request, response) {
  response.send(elements.card);
}
app.get("/Shopping/card", card);
function card(request, response) {
  response.send(elements.card);
}

app.patch("/Shopping/card/:id", card);
function card(request, response) {
  response.send(elements.card);
}
app.post("/login", Login);
function Login(request, response) {
  response.send(elements.login);
}
app.get("/login", Login);
function Login(request, response) {
  response.send(elements.login);
}
app.post("/register", Register);
function Register(request, response) {
  response.send(elements.register);
}
app.get("/register", Register);
function Register(request, response) {
  response.send(elements.register);
}

app.post("/payment", Payment);
function Payment(request, response) {
  response.send(elements.payment);
}
app.get("/payment", Payment);
function Payment(request, response) {
  response.send(elements.payment);
}
