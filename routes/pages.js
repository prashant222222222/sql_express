const route = require("express").Router();
const db = require("../db");
//current folder for api
route.get("/", (request, response) => {
  db.getAllPersons()
    .then((persons) => {
      response.render("persons", { persons });
      //because rows is array here so directly pass it
    })

    .catch((err) => {
      res.send({error:err});
    });
});

route.get("/add", (req, res) => {
  res.render("persons_add");
});

route.post("/add", (req, res) => {
  db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(() => {
      res.redirect("/pages/");
    })
    .catch(() => {
      res.send(err);
    });
});

exports = module.exports = {
  route,
};
