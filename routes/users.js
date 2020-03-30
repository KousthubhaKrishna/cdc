const express = require('express')
const router = express.Router()
const UsersModel = require('../models/User')

router.get("/", async (req, res) => {
    console.log("Came Here");
    const users = await UsersModel.find((err, docs) => {
        if (!err) {
            console.log("Success Retireved");
            console.log(docs);
        }
        else
            console.log("Failed")
    });
    res.send("Users List");
});
module.exports = router;