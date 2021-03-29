const cors = require('cors')

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

const express = require('express');

const app = express();

app.listen(8000, () => {
    console.log('Server started!')
  });

app.route('/api/dogs').get((req,res) => {
    res.send({
        dogs: [{name: 'charlie'}, {name: 'lilly'}],
    })
});

app.route('/:name').get((req,res) => {
    const requestedDogName = req.params['name'];
    res.send({ name: requestedDogName});
});



//sending a new object to an endpoint (to insert a new dog into the database)

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.route('api/dogs').post((req,res) => {
    res.send(201, req.body);
});

//changing an object at an endpoint

app.route('/api/dogs/:name').put((req, res) => {
    res.send(200, req.body)
});

//deleting an object at an endpoint

app.route('/api/dogs/:name').delete((req, res) => {
    res.sendStatus(204)
});
