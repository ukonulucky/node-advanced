const {parse} = require("csv-parse");
console.log(__dirname)
const fs = require("fs");
const habitablePlanet = [];

const checkHabitability = (planet) => {
   return planet["koi_disposition"] === "CONFIRMED" && parseFloat(planet["koi_insol"]) > parseFloat(0.36) && parseFloat(planet["koi_insol"]) < parseFloat(1.11) && parseFloat(planet["koi_prad"]) < parseFloat(1.6)
}
fs.createReadStream(`${__dirname}/public/kepler__data.csv`).pipe(parse({
    comment: "#",
    columns: true
}))
  .on("data", (chunk) => {
    if(checkHabitability(chunk)){
        habitablePlanet.push(chunk);
    }

  })
  .on("error", (error) => console.log(error))
  .on("end", () => {
    console.log("file reading complete");
    console.log(habitablePlanet.length);
  });

// in node all steams are impelmented using the event emiiter
// buffre are objects that node uses to represent a collection of bytes
