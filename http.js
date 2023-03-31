// const http = require("https")

// const req = http.request("https://www.nairaland.com", (res) => {
//      res.on("data", (chunk) => {
//        console.log(chunk)
//      })
//      res.on("end", () => {
//         console.log("no more data")
//      })
// })


// req.end()
// when using the get function from the https you dont need to call req.end()

const {get} = require("https");

get("https://www.nairaland.com", (res) => {
     res.on("data", (chunk) => {
       console.log(chunk)
     })
     res.on("end", () => {
        console.log("no more data")
     })
})
