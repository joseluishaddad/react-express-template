const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config()

const app = express();
const dev = app.get('env') !== 'production';

if(!dev){
    app.disable('x-powered-by')
    app.use(express.static(path.resolve(__dirname, 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
  

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`)
})