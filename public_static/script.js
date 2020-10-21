$(function () {
  let name = $("#name");
  let age = $("#number");
  let city = $("#city");
  let submit = $("#submit");
  let tbl_persons = $("#persons");

  function refreshPersonTable(persons) {
    tbl_persons.empty();
    tbl_persons.append(`
    <tr>
            <th>name</th>
            <th>age</th>
            <th>city</th>
    
        </tr>
    `);
    for (person of persons) {
      tbl_persons.append(`
         <tr>
            <td>${person.name}</td>
            <td>${person.age} </td>
            <td>${person.city}</td>
        </tr>
        `);
    }
  }

  $.get("/api/persons/", function (data) {
    refreshPersonTable(data);
  });
  submit.click(function () {
    $.post(
      "/api/persons/",
      {
        name: name.val(),
        age: age.val(),
        city: city.val(),
      },
      function (data) {
        refreshPersonTable(data);
      }
    );
    //console.log("burron clickl");
  });
});
