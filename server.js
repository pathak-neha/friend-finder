var express = require("express");
var bodyParser = require("body-parser");


var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});