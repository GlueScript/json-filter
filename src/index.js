var app = require('express')(),
    winston = require('winston'),
    bodyParser = require('body-parser'),
    filter = require('./lib/filter');

/*
* Get winston to log uncaught exceptions and to not exit
*/
var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true
    })
  ],
  exitOnError: false
});

app.use(bodyParser.json({limit: '1024kb'}));

app.get('/', function (req, res) {
    res.json({description : "Filters arrays of json objects"});
});

// expects a json array in req.body
app.post('/', function(req, res) {

    console.log(req.body);

    // action is either return matches (default) or remove them (req.query.rem = true)
    if (req.query.rem){
        delete req.query.rem;
        filter.remove(req.body, req.query, function(err, data) {
            if (!err){
                res.json(data);
            } else {
                res.status(400).send(data);
            }
        });
    } else {
        filter.match(req.body, req.query, function(err, data) {
            if (!err){
                res.json(data);
            } else {
                res.status(400).send(data);
            }
        });
    }
});

var PORT = process.env.PORT || 80;
app.listen(PORT);
logger.log('info', 'Running json-filter service on http://localhost:' + PORT);
