var _ = require('underscore');

/**
 * return an array of items from input that match pattern
 * input is an array of objects, or a single object
 * pattern in an object
 * callback expects two args, err and result
 *
 * can _.partition(array, predicate) be used by both functions?
 */
exports.keep = function(input, pattern, callback) {

    var output = [];

    // ensure that input is an array, if not treat it as a single element array
    if (!_.isArray(input)) {
        input = [input];
    }
    
    // add all matching elements to output
    // _.where() will work unless pattern allows for wild card matching
    // or just use _.filter()?
    _.each(pattern, function(val, key, list) {
        output = output.concat(_.filter(input, function(item){
            return item[key] == val;
        }));
    });

    callback(null, output);
};

/**
 * return an array of items from input that don't match anything in pattern
 * input is an array of objects, or a single object
 * pattern in an object
 * callback expects two args, err and result
 */
exports.remove = function(input, pattern, callback) {

    // ensure that input is an array, if not treat it as a single element array
    if (!_.isArray(input)) {
        input = [input];
    }

    // keep only items that don't match anything in pattern
    // reimplement using _.reject
    _.each(pattern, function(val, key, list) {
        input = _.filter(input, function(item){
            return item[key] != val;
        });
    });

    callback(null, input);
};
