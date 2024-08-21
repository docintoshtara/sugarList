const mongoose = require('mongoose')

mongoose.connect(process.env.DBCON)
    .then((res) => res)
    .then((conn) => { console.log("db connected") })
    .catch((e) => { console.log(e) })