const express = require("express")
let router = express.Router()
const path = require("path")

router.get("", (req, res) => {
    res.sendFile(path.join(__dirname+"/../public/templates/notfound.html"))
})

module.exports = router