var filter = require('../src/lib/filter'),
    assert = require('assert');

describe('Filter', function() {
    describe('keep', function() {
        it('should respond with an empty array for no input', function() {
            var value = [];
            var pattern = '';
            filter.keep(value, pattern, function(err, result) {
                assert.equal(0, result.length);
            });
        });
        it('should respond with exactly matching items', function() {
            var value = [
                {status: 'error'},
                {status: 'success'},
                {status: 'weird'},
            ];
            var pattern = {status : 'error'};
            filter.keep(value, pattern, function(err, result) {
                assert.equal(1, result.length);
                assert(result[0]['status'] == 'error');
            });
        });
        it('should respond with all matching items', function() {
            var value = [
                {status: 'error', code: 500},
                {status: 'success', code: 200},
                {status: 'error', code: 404},
            ];
            var pattern = {status : 'error'};
            filter.keep(value, pattern, function(err, result) {
                assert.equal(2, result.length);
                assert(result[0]['status'] == 'error');
                assert(result[1]['status'] == 'error');
            });
        });
        it('should respond with items that match any value in pattern', function() {
            var value = [
                {status: 'error', code: 500},
                {status: 'success', code: 200},
                {status: 'error', code: 404},
            ];
            var pattern = {code : 404, status: 'success'};
            filter.keep(value, pattern, function(err, result) {
                assert.equal(2, result.length);
                assert(result[0]['status'] == 'error');
                assert(result[1]['status'] == 'success');
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
