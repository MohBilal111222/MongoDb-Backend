import dotenv from "dotenv";
dotenv.config();
import express from "express"
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.post('/user',(req,res)=> {
const {tittle} = req.body;

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

