const route = require("express").Router();
// this route is on the '/api/' path
const db = require("../db");
route.get("/persons/", (req, res) => {
  db.getAllPersons()
    .then((persons) => {
      res.send(persons);
    })
    .catch((err) => {
      res.send(err);
    });
});
route.post("/persons/", (req, res) => {
  //add the new person (details are in body)
  db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(() => {
      res.redirect("/api/persons/");
    })
    .catch((err) => {
      res.send(err);
    });
});

exports = module.exports = {
  route,
};
