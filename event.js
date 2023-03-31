const EventEmiter = require('events')

const celebrity = new  EventEmiter()



celebrity.on("won race", (data) => {
   if(data === "gold"){
       console.log("Congratulations bro for winning ", data)
   }
})


// fan 2 subscribing to the events
celebrity.on("won race", (data) => {
    if(data === "bronze"){
        console.log("Congratulations bro for winning ", data)
    }
})


process.on("exit", (code) => {
    console.log("code ended with status code", code)
})

celebrity.emit("won race","gold")
celebrity.emit("won race","bronze")