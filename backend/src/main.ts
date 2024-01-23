import express from 'express';
import cors from 'cors';
const app = express()

let port = 5000
let startingText = "Starting Text"

app.use(cors({
    origin: "*"
}));

app.use(express.json())

app.get('/Test', (req, res) => {
  res.send({
    "Test": 123,
    "OtherTest": startingText
  })
})

app.post('/Update', (req,res) => {
  startingText = req.body.toUpdate;
  console.log(`Text has been updated to ${startingText}`)
})

app.listen(port, () => {
  console.log(`API endpoint started on port ${port}`)
})
