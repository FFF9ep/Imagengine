import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => res.send("API Works Good!"))

app.listen(PORT, () => console.log('Server Running on port ' + PORT ));