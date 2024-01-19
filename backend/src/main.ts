import express from 'express';
const app = express()

app.get('/Test', (req, res) => {
  res.send({
    "Test": 123,
    "OtherTest": "Wow data"
  })
})

app.listen(3000, () => {
  console.log("API endpoint started")
})
