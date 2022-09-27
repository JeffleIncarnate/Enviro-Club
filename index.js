const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
let port = 3000 || process.env.PORT

// route vars
const index = require("./src/routes/home.js")
const contact = require("./src/routes/contact.js")
const about = require("./src/routes/about.js")
const impact = require("./src/routes/imapct.js")
const newsandnotices = require("./src/routes/newsandnotices.js")
const notfound = require("./src/routes/notfound.js")

app.use(express.static(path.join(__dirname+"/src/public")))
app.use(cors())

// serving the routes
app.use("/", index)
app.use("/contact", contact)
app.use("/about", about)
app.use("/impact", impact)
app.use("/newsandnotices", newsandnotices)
app.use("*", notfound)

app.listen(port, () => {
    console.log(`We are listening on port http://localhost:${port}`)
})
