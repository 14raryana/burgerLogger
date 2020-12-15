var express = require("express");

var PORT = process.env.PORT || 3030;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout:'main',

    // NOT REQUIRED TO WORK, JUST EXAMPLE OF HANDLEBARS HELPER FUNCTION
    helpers:{
        
        // navLink: function(url, options){
        //     return '<li' + 
        //         ((url == app.locals.activeRoute) ? ' class="active" ' : '') + 
        //         '><a href="' + url + '">' + options.fn(this) + '</a></li>';
        // }
}}));

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/router.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
