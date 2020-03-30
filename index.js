// Required Imports 
const connection = require('./models');
const express = require('express');
const application = express();
const UsersModel = require('./models/User')

application.use(express.urlencoded({
    extended: true
}));

// Import Routes
//const usersRoute = require('./routes/users');


application.get("/users", async (req, res) => {
    try {
        const users = await UsersModel.find((err, docs) => {
            console.log("Here");
        })
        res.send("HI");
    }
    catch (err) {
        console.log(err);
    }
});
// Routes
application.get('/', (req, res) => {
    res.send("<h1> Home Sweet Home </h1>");
});

application.get('/users');


// Starting Server to listen 
const port = process.env.PORT || 3000;
application.listen(port, () => {
    console.log('Server Started .. AT ' + port);
});