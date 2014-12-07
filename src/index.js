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
    // action is either return matches (default) or remove them (req.param['rev'] = true)
    if (req.param['rev']){
        filter.remove(req.body, req.param['pattern'], function(data) {
            res.json(data);
        });
    } else {
        filter.match(req.body, req.param['pattern'], function(data) {
            res.json(data);
        });
    }
});

var PORT = process.env.PORT || 80;
app.listen(PORT);
logger.log('Running on http://localhost:' + PORT);
