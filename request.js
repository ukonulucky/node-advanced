const axios = require("axios")

console.log("code ran")
axios.get("https://www.nairaland.com").then(res => {
  console.log(res)
}).catch(error => console.log(error.message))