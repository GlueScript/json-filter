exports.match = function(input, pattern, callback) {

    var output = [];

    // ensure that input is an array, if not treat it as a single element array
    if (!(input instanceof Array)) {
        input = [input];
    }
    
    if (0 !== input.length) {
        // add all matching elements to output
    }

    callback(output);
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


    callback(output);
};
