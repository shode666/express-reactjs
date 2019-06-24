import express from 'express';
// import http from 'http'
import bodyParser from 'body-parser'
import path from 'path'
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, 'public');


app.use(express.static(publicPath));
app.use(bodyParser.json()) // Parses json, multi-part (file), url-encoded

//default route /index.html
app.get((req,res)=>res.sendFile(path.join(publicPath,'index.html')))
app.listen(PORT,()=>{
    console.log(`app starting at localhost:${PORT}`)
})

