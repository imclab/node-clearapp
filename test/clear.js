var clear = require('../'),
    test = require('tap').test;

test('clear-async', function(t) {
    t.plan(4);
    clear.total(function(err, res) {
        t.notOk(err, 'no error');
        t.type(res, 'number', 'the count is a number');
    });
    clear.all(function(err, res) {
        t.notOk(err, 'no error');
        t.type(res, 'Array', 'items are in a list');
    });
});

test('sync', function(t) {
    t.type(clear.filename(), 'string', 'filename is a string');
    t.end();
});
