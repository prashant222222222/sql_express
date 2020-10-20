const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.get("/", (request, response) => {
  response.render("persons", {
    persons: [
      { name: "abdr", age: 34, city: "jserf" },
      { name: "sfgdsfdsfas", age: 34, city: "asfsdsdaf" },
    ],
  });
});

app.listen(4444, () => {
  console.log("hwllo");
});
