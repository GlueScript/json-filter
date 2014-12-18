var _ = require('underscore');

/**
 *
 */
exports.keep = function(input, pattern, callback) {

    var output = [];

    // ensure that input is an array, if not treat it as a single element array
    if (!(input instanceof Array)) {
        input = [input];
    }
    
    var pattern_keys = pattern instanceof Object ? Object.keys(pattern) : [];

    // add all matching elements to output
    for(var key in pattern_keys){
        var val = pattern_keys[key];
        var items = _.filter(input, function(item){ return item[val] == pattern[val]; });
        output = output.concat(items);
    }

    // callback expects args of err, result
    callback(null, output);
};

exports.remove = function(input, pattern, callback) {

    var output = [];

    // ensure that input is an array, if not treat it as a single element array
    if (!(input instanceof Array)) {
        input = [input];
    }

    if (0 !== input.length) {
        // add all non-matching elements to output
    }
    
    // callback expects args of err, result
    callback(null, output);
};
