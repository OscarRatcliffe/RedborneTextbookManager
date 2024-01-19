import express from 'express';
import cors from 'cors';
const app = express()

let port = 5000

app.use(cors({
    origin: "*"
}));

app.get('/Test', (req, res) => {
  res.send({
    "Test": 123,
    "OtherTest": "Wo]sevibevohb"
  })
})

app.listen(port, () => {
  console.log(`API endpoint started on port ${port}`)
})
