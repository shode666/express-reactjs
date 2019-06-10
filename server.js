import express from 'express';
import http from 'http'
import bodyParser from 'body-parser'
import path from 'path'

const app = express();
const PORT = process.env.PORT || 3000;

var publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.use(bodyParser.json()) // Parses json, multi-part (file), url-encoded

app.get("/", (req,res)=>res.sendFile(path.join(publicPath,'index.html')))

app.listen(PORT,()=>{
    console.log(`app starting at localhost:${PORT}`)
})

