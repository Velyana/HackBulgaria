"use strict";
var _ = require("lodash");

var htmlGenerator = {
    link : function(data) {
      var l = "<a href=\"<%= link%> title=\"<%= title%>>\" <%= text%></a>";
      var lHtml = _.template(l, {
      link: data.link,
      title: data.title,
      text: data.text
});
      return lHtml;
  },
   paragraph: function(data) {
      var p = "<p><%= label%></p>";
      var pHtml = _.template(p, {
      label: data.label
    });
      return pHtml;
 },
    list: function(data) {
      var children = [];
      data.children.forEach(function(element) {
        children.push(element.label);
      });
      var  template = "< <%= type%> <%= type%> ><% _(items).forEach(function(item) { %><li><%= item %></li><% }); %> </<%= type%>>";
      var lHtml = _.template(template, {
        type: data.type,
        items: children
      });

      return lHtml;
    },
    tag: function(data) {
/*      var attr = [];
      console.log(data.attributes);*/
/*      var t1 = "< <%= tagname%> >  </<%= tagname%>>";
      var tHtml1 = _.template(t1, {

      });*/
      var attributes = [];
      var attributesTemplate = "<%= key%> = \"<%= value%> ";

/*      if(data.attributes) {

      }
*/
      var tTemplate = "<<%= tagname%>> <%= attributes%> <%=content%> </<%= tagname%>>";
      return _.template(tTemplate, {
        tagName: data.tagName,
        data: data.data,
        attributes: data.attributes

      });

 }
};

var element = htmlGenerator.tag({
    tagName: "div",
    data: htmlGenerator.tag({
        tagName: "h1",
        data: "Hello!"
    }),
    attributes: [{
        key: "class",
        value: "container"
    }, {
        key: "id",
        value: "main-container"
    }]
});
console.log(element);

/*var items = ["Edno", "Dve", "Tri"],
template = "<ul><% _(items).forEach(function(item) { %><li><%= item %></li><% }); %>",
parsedHtml = _.template(template, items);*/


/*var par = htmlGenerator.paragraph({
    label: "Hack Bulgaria"
});
console.log(par);

var lnk = htmlGenerator.link({
    link: "https://hackbulgaria.com",
    title: "Hack Bulgaria",
    text: "Курсове по Програмиране!"
});
console.log(lnk);

var lst = htmlGenerator.list({
    type: "ul",
    children: [{
        label: "Item 1"
    }, {
        label: "Item 2"
    }]
});
console.log(lst);
*/
