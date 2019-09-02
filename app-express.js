const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminModule = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorRoutes = require("./routes/error");
const fp = require("./util/paths");

// MIDDLEWARE USAGE
// app.use((req, res, next) => {
//   console.log("In Middleware");
//   next();
// });

// Auto Body Parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views');

// Static File Access to client
app.use(express.static(fp("public")))

app.use([adminModule.router, shopRoutes, errorRoutes]);

app.listen(4500);
