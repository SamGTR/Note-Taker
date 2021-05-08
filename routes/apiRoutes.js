// Dependencies
const fs = require("fs");

// 'uuid' npm package for creating unique id for a note
const { v4: uuidv4 } = require('uuid');

// ROUTING
module.exports = (app) => {

    // GET Request for API
    app.get("/api/notes", (req, res) => {
        
        console.log("\nGET notes request executing");

        // Reading notes data from 'db.json' file 
        let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
        console.log("\nGET request notes data: " + JSON.stringify(notes));
        
        // Response of GET request
        res.json(notes);
    });


    // POST Request for API
    app.post("/api/notes", (req, res) => {

        // Getting new note from req.body 
        const newNote = req.body;
        
        console.log("\nExecuting POST request for New Note : " + JSON.stringify(newNote));

        // Generating and assigning unique id to the new note
        newNote.id = uuidv4();

        // Reading notes data from 'db.json' file 
        let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    
        // Pushing new note into 'db.json' file
        notes.push(newNote);

        // Writing updated notes data to 'db.json' file
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        
        console.log("\nSuccessfully added new note to 'db.json' file!");

        // Response of POST request
        res.json(notes);
    });


    // DELETE Request for API
    app.delete("/api/notes/:id", (req, res) => {

        // Getting ID of the note to be deleted
        let noteId = req.params.id.toString();
        
        console.log(`\nExecuting request for DELETE note for noteId: ${noteId}`);

        // Reading notes data from 'db.json' file 
        let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        // Filtering notes for deleting a note
        const newData = notes.filter( note => note.id.toString() !== noteId );

        // Writing the filtered notes to 'db.json' file 
        fs.writeFileSync('./db/db.json', JSON.stringify(newData));
        
        console.log(`\nSuccessfully deleted note with id : ${noteId}`);

        // Response of DELETE request
        res.json(newData);
    });
};