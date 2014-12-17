var filter = require('../src/lib/filter'),
    assert = require('assert');

describe('Filter', function() {
    describe('match', function() {
        it('should respond with an array for no input', function() {
            var value = [];
            var pattern = '';
            filter.match(value, pattern, function(err, result) {
                assert.equal(0, result.length);
            });
        });
    });
    describe('remove', function() {
        it('should respond with an array for no input', function() {
            var value = [];
            var pattern = '';
            filter.remove(value, pattern, function(err, result) {
                assert.equal(0, result.length);
            });
        });
    });
});
