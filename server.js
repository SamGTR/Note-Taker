// Dependencies
const express = require("express");

// Setting up an 'express' server
const app = express();

// Setting up an initial port.
const PORT = process.env.PORT || 3000;

// Setting up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});