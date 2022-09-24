const express = require("express")
let router = express.Router()
const path = require("path")

router.get("", (req, res) => {
    res.send("bruh, it does not exist.")
})

module.exports = router