"use strict";

$(document).ready(function() {
  listStudents();

  function listStudents() {
      listStudent(function(data) {
      var template = Handlebars.compile($("#template-table").html());
      var templateHtml = template({object: data});
      $("#table-students").html(templateHtml);
    });

  }

  function listStudent(cb) {
    $.ajax({
      url: "http://localhost:3030/students",
      type: "GET"
    }).done(cb);

  }

  function createStudent(student) {
    $.ajax({
      url: "http://localhost:3030/student",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(student)
    });
  }

  function deleteStudent(facNumber) {
    $.ajax({
      url: "http://localhost:3030/student/" + facNumber,
      type: "DELETE"
    });
  }

  function getStudent(facNumber, cb) {
    $.ajax({
      url: "http://localhost:3030/student/" + facNumber,
      type: "GET"
    }).done(cb);
  }


  $(document).on("click", "#create", function() {
    var student = {
      name: $("#name").val(),
      facultyNumber: $("#number").val(),
      courses: $("#courses").val()
    };
    createStudent(student);
    listStudents();
  });

  $(document).on("click", "#update", function() {
    getStudent($("#number").val(), function(student) {
      console.log(student);
      $("#name").val(student.name);
      $("#courses").val(student.courses);
    });
    listStudents();
  });

  $(document).on("click", "#list", function() {
    listStudent();
  });

  $(document).on("click", "#delete", function() {
    deleteStudent($("#number").val());
    listStudents();
  });

});
