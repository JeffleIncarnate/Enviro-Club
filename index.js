const express = require("express")
const app = express()
const path = require("path")
let port = 4000 || process.env.PORT

// route vars
const contact = require("./src/routes/contact.js")
const about = require("./src/routes/about.js")
const impact = require("./src/routes/imapct.js")
const newsandnotices = require("./src/routes/newsandnotices.js")

app.use(express.static(path.join(__dirname+"/src/public")))
app.use(express.static(path.join(__dirname+"/src/public/images")))
app.use(express.static(path.join(__dirname+"/src/public/stylesheets")))
app.use(express.static(path.join(__dirname+"/src/public/templates")))


// serving the routes
app.use("/contact", contact)
app.use("/about", about)
app.use("/impact", impact)
app.use("/newsandnotices", newsandnotices)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/src/public/templates/index.html"))
})

app.listen(port, () => {
    console.log(`We are listening on port ${port}`)
})