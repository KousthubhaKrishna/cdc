// Required Imports 
require("./models/conn");
const express = require('express');


// Initialise application 
const application = express();
application.use(express.urlencoded({
    extended: true
}));
application.use(express.json());
application.use((err, req, res, next) => {
    if (err instanceof SyntaxError) return res.status(400).send(JSON.stringify({
        error: "Invalid JSON"
    }))
    console.error(err);
    res.status(500).send();
});

// Routes
application.get('/', (req, res) => {
    res.send("<h1> Home Sweet Home </h1>");
});


// Import Routes
const usersRoutes = require('./routes/usersRoutes');
application.use("/users", usersRoutes)

const placementRoutes = require('./routes/placementRoutes');
application.use("/placements", placementRoutes);

const eventRoutes = require('./routes/eventRoutes');
application.use("/events", eventRoutes);

// Starting Server to listen 
const port = 3000;
application.listen(port, () => {
    console.log('Server started at port: ' + port);
});