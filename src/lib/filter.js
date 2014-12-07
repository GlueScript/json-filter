exports.match = function(input, pattern, callback) {

    var output = [];

    // ensure that input is an array, if not treat it as a single element array
    if (!(input instanceof Array)) {
        input = [input];
    } else if (0 == input.length) {
        callback(output);
    }

    callback(output);
};

exports.remove = function(input, pattern, callback) {

    var output = [];

    // ensure that input is an array, if not treat it as a single element array
    if (!(input instanceof Array)) {
        input = [input];
    } else if (0 == input.length) {
        callback(output);
    }

    callback(output);
};
