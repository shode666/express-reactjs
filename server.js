import express from 'express';
import http from 'http'
import bodyParser from 'body-parser'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack.config.client';

const app = express();
const PORT = process.env.PORT || 3000;
const compiler = webpack(config)

const publicPath = path.join(__dirname, 'public');

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }))

app.use(express.static(publicPath));
app.use(bodyParser.json()) // Parses json, multi-part (file), url-encoded

app.get("/", (req,res)=>res.sendFile(path.join(publicPath,'index.html')))
app.get('/user', function (req, res) {
    res.send('Got a GET request at /user')
  })
app.get('/people', function (req, res) {
    res.send('Got a GET request at /people')
})
app.listen(PORT,()=>{
    console.log(`app starting at localhost:${PORT}`)
})

