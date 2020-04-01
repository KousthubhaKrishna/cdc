const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cdc", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connection established to database..");
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => { console.log("Connected TO DB"); });
// module.exports = db;