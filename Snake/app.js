$(document).ready(function() {
  "use strict";

localStorage.setItem("first", JSON.stringify({
    Task: "Feed the cat",
    Date: "07-07-2014",
    Pandaed: "Panda",
    Options: "More information"
}));

localStorage.setItem("second", JSON.stringify({
    Task: "Learn JS",
    Date: "07-07-2014",
    Pandaed: "Panda",
    Options: "More information"
}));

localStorage.setItem("third", JSON.stringify({
    Task: "Don't fail at FMI",
    Date: "07-07-2014",
    Pandaed: "Panda",
    Options: "More information"
}));

  var task1 = JSON.parse(localStorage.getItem("first"));
  var task2 = JSON.parse(localStorage.getItem("second"));
  var task3 = JSON.parse(localStorage.getItem("third"));
  var task = [task1, task2, task3];

  function showTaskTable(data) {
    var template = Handlebars.compile($("#template-table").html());
    var templateHtml = template({item: data});
    $("#task-table").html(templateHtml);
  }

  showTaskTable(task);
});
