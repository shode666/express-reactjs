import fs from 'fs'
import express from 'express';
import http from 'http'
import https from 'https'
import bodyParser from 'body-parser'
import path from 'path'
import 'dotenv/config'
import exampleRouter from './routers/example'
const app = express();

const publicPath = path.join(__dirname, 'public');


app.use(express.static(publicPath));
app.use(bodyParser.json()) // Parses json, multi-part (file), url-encoded

app.use('/ex',exampleRouter);

app.get("**",(req,res)=>res.sendFile(path.join(publicPath,'index.html')))
//redirect all unknown route to root
//app.get("*", (req,res)=>{res.redirect("/")});

http.createServer(app).listen(process.env.HTTP_PORT || 8080,()=>{
    console.log(`app starting at http://localhost:${process.env.HTTP_PORT || 8080}`)
})
https.createServer({key: fs.readFileSync('server.key'),cert: fs.readFileSync('server.cert')}, app).listen(process.env.HTTPS_PORT || 8083,()=>{
    console.log(`app starting at https://localhost:${process.env.HTTPS_PORT || 8443}`)
})

