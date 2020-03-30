const mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({

    first_name:
    {
        type: String,
        required: "Required"
    },
    last_name:
    {
        type: String,
        required: "Required"
    },
    roll_no:
    {
        type: String,
        required: "Required"
    }
});

module.exports = mongoose.model("users", UserSchema);