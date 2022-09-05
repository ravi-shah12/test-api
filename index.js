const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    var response = "Hello " + req.query.name
  res.send(response);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
