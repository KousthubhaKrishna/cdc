const mongoose = require('mongoose');

mongoose.createConnection("mongodb://localhost:27017/cdc", { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error)
        console.log("Success Coneected");
    else
        console.log("Error");
});