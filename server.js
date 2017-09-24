const express = require("express")
const mustacheExpress = require("mustache-express")
const expressValidator = require("express-validator")
const bodyParser = require("body-parser")
const app = express()

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())

app.get("/", (request, response) => {
  console.log("You are Home")
  response.render("home")
})

app.get("/login", (request, response) => {
  console.log("you are in login")
  response.render("login")
})

app.post("login", (request, response) => {
  response.redirect("/")
})

const authenticate = (request, response, next) => {
  console.log("Working")
  if (request.body.password === "" && request.body.name === "") {
    next()
  } else {
    response.redirect("/")
  }
}

app.use(authenticate)

app.get("/login", (request, response) => {
  console.log("logging")
  response.render("login")
})

app.post("/login", (request, response) => {
  console.log("Whats happening", request.body)

  request.checkBody("name", "we need your name").notEmpty()
  request.checkBody("password", "we need your password").notEmpty()
  response.render("login")
})
app.listen(3000, () => {
  console.log("Tough project Mothe Fudger")
})
