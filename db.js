const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "myuser",
  password: "mypass",
  database: "node",
});

function getAllPersons() {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from
     persons`,
      (err, rows, cols) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

exports = module.exports = {
  getAllPersons,
};
