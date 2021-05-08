// Dependencies
const path = require("path");

// ROUTING
module.exports = (app) => {

    // GET requests for displaying html pages
    
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
