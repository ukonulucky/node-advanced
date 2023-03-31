const express=  require('express')
const path = require('path')

const friendRouter = require('./routes/friend.router')

const app = express()

app.use("/site", express.static(path.join(__dirname, 'public')))


app.use(express.json())
app.set("view engine", "hbs")
app.set("views", path.join(__dirname,"views"))


app.get("/pages", function(req, res) {
    res.render("index", {
        title:"Learning Node",
        author:"John Dave"
    })
})

const PORT = 5000


app.use((req, res,next) => {
    const start = Date.now()
    next()
    const timer = Date.now() - start
    console.log(` ${req.baseUrl} ${req.url} ${req.method} ${timer}ms`)
 })

app.use("/api",friendRouter)


app.get("/", (req, res) => {
    res.status(200).json({message:"Server running..."})
})






app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})