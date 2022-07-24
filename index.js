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
  response.send(elements);
}
