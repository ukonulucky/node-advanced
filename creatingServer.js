const http = require("http")
const PORT = 5000

const friendList = [{
    id:0,
    name:"john",
},{
    id:1,
    name:"Tunde",
},{
    id:2,
    name:"Fumi",
}]
const server = http.createServer()
  server.on("request", (req, res) => {
    console.log("code ran")
    const myId = req.url.split("/")
 
  if(req.method === "POST"){
      req.on("data", (chunk) => {
        const friend = JSON.parse(chunk)
        friendList.push(friend)
        console.log(friendList)
        res.statusCode = 201
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(friendList))
      })
  } else if (req.method === "GET" && myId[2]){
      const data =  friendList.filter( i => {
        if(i.id === +myId[2]){    
         return i
        }
      })
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(data[0]))
  } else if(req.method === "GET" && req.url === "/friend"){
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(friendList))
  } else{
    res.statusCode = 404
    res.setHeader("Content-Type", "text/plain")
    res.end()
  }
  })

server.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})

