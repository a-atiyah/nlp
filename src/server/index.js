//dotenv
const dotenv = require('dotenv');
dotenv.config();
// API
const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1?'
const API_KEY = 'e64d71f3ef90b28e2507c245a45d6ac6'
const LANG = 'en'
// Requirements
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

// Instantiate express
const app = express()

//Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Point to dist folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Requist
app.post('/data', function (req, res) {
    const url = req.body.url;
    console.log(url)
    fetch(BASE_URL + 'key=' + API_KEY + '&url=' + url + '&lang=' + LANG + "&model=general",
    {
        method: 'POST',
        headers: {"Content-Type": "application/JSON"}
    })
    .then(response => response.json())
    .then(data => {
            console.log(data)
            res.send(data)
    })
})