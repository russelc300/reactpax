const express = require('express')
const dbConnevct = require('./dbConnect')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send("Hello World!"))
app.listen(port, () => console.log(`NodeJs server started at port ${port}!`))