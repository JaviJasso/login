const express = require("express")
const mustacheExpress = require("mustache-express")
// const data = require("./data")
const expressValidator = require("express-validator")
const bodyParser = require("body-parser")

const app = express()

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mst")

app.use(express.static("public"))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(expressValidator())

app.listen(3000, () => {
  console.log("Tough project Mothe Fudger")
})
