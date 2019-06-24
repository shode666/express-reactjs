import fs from 'fs'
import express from 'express';
import http from 'http'
import https from 'https'
import bodyParser from 'body-parser'
import path from 'path'
import 'dotenv/config'

const app = express();

const publicPath = path.join(__dirname, 'public');


app.use(express.static(publicPath));
app.use(bodyParser.json()) // Parses json, multi-part (file), url-encoded

//default route /index.html
app.get((req,res)=>res.sendFile(path.join(publicPath,'index.html')))
http.createServer(app).listen(process.env.HTTP_PORT || 8080,()=>{
    console.log(`app starting at http://localhost:${process.env.HTTP_PORT || 8080}`)
})
// https.createServer({Key: fs.readFileSync,cert: fstat.readFileSync()}, app).listen(process.env.HTTPS_PORT || 8443,()=>{
//     console.log(`app starting at https://localhost:${process.env.HTTPS_PORT || 8443}`)
// })

