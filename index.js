#!/usr/bin/node
var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'));
app.use(express.json());

var model = {
  "title": "products",
  "list": [
    { "id": 1, "name": "alfa"},
    { "id": 2, "name": "beta"},
    { "id": 3, "name": "gamma"}
  ]
}

app.post('/products/:action',function(req,res) {
	switch (req.params.action) {
    case "load":
      res.send(model);
      return;
    case "save":
      res.send("ok");
      model = req.body;
      return;
    default:
  }
});

const SERVERPORT = 80;
app.listen(SERVERPORT);
