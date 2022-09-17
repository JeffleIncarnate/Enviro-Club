const express = require("express")
let router = express.Router()
const path = require("path")

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/../public/templates/impact.html"))
})

module.exports = router