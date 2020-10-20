const express = require("express");

const app = express();
//https://www.youtube.com/watch?v=oxLAqN4noA0&list=PLl4Y2XuUavmufEvZlmluM5eWoer1WkLfz
const db = require("./db");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.get("/", (request, response) => {
  db.getAllPersons()
    .then((persons) => {
      response.render("persons", { persons });
      //because rows is array here so directly pass it
    })

    .catch((err) => {
      res.send(err);
    });
});

app.get("/add", (req, res) => {
  res.render("persons_add");
});

app.post("/add", (req, res) => {});

app.listen(4444, () => {
  console.log("hwllo");
});
