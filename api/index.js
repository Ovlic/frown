const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const passkeys = [
  {key1: 'test'}
];

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.get('/api', (req, res) => {
    res.send("Hello.")
})
app.get('/api/passkeys', (req, res) => {
    console.log(req.headers)
    console.log("eee request")
    if(req.header('key') === "test"){
        res.send(passkeys);
    } else{
        res.send("Incorrect key.")
    }
});

app.listen(process.env.PORT || 3000, () => console.log('Listening...'))
