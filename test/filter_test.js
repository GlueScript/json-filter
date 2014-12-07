var filter = require('../src/lib/filter'),
    assert = require('assert');

describe('Filter', function() {
    describe('match', function() {
        it('should respond with an array', function() {
            var value = [];
            var pattern = '';
            filter.match(value, pattern, function(result) {
                assert.equal(0, result.length);
            });
        });
    });
});
