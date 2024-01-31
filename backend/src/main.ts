import express from 'express';
import cors from 'cors';
import { endpoints } from './endpoints';
const app = express()

let port = 5000

app.use(cors({
    origin: "*"
}));

app.use(express.json()) 

endpoints(app)

app.listen(port, () => {
  console.log(`API endpoint started on port ${port}`)
})
