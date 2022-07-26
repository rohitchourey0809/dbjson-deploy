// var fs = require("fs");
// var data = fs.readFileSync("db.json");
// console.log("data", data);

// var elements = JSON.parse(data);
// console.log("elements", elements);
// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

// app.use(express.static("public"));
// app.use(cors());
// app.get("/Shopping", Shopping);
// function Shopping(request, response) {
//   response.send(elements.Shopping);
// }
// app.post("/Shopping", Shopping);
// function Shopping(request, response) {
//   response.send(elements.Shopping);
// }

// app.get("/Shopping/:id", Shopping);

// async function Shopping(request, response) {
//   const _id = request.params.id;
//   console.log(_id, "id");
//   const Shoppingdata = await Shopping.findById(_id);
//   response.send(Shoppingdata);
// }

// app.post("/Shopping/card", card);

// function card(request, response) {
//   response.send(elements.card);
// }
// app.get("/Shopping/card", card);
// function card(request, response) {
//   response.send(elements.card);
// }

// // app.patch("/Shopping/card/:id", card);
// // function card(request, response) {
// //   response.send(elements.card);
// // }
// app.post("/login", Login);
// function Login(request, response) {
//   response.send(elements.login);
// }
// app.get("/login", Login);
// function Login(request, response) {
//   response.send(elements.login);
// }
// app.post("/register", Register);
// function Register(request, response) {
//   response.send(elements.register);
// }
// app.get("/register", Register);
// function Register(request, response) {
//   response.send(elements.register);
// }

// app.post("/payment", Payment);
// function Payment(request, response) {
//   response.send(elements.payment);
// }
// app.get("/payment", Payment);
// function Payment(request, response) {
//   response.send(elements.payment);
// }

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
console.log(router);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
