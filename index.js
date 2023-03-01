const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.port || 3000
const api = require("./data.json")
const api1 = require("./data1.json")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/service', (req, res) => {
    res.send(api)
  })

  app.get('/about', (req, res) => {
    res.send(api1)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})