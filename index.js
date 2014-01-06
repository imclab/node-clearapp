var sqlite3 = require('sqlite3');

var clear = module.exports = {},
    dbPath = false;

var user = process.env.USER;

clear.config = function(_) {
    return clear;
};

function filename() {
    return dbPath || '/Users/' + user + '/Library/Containers/com.realmacsoftware.clear.mac/Data/Library/Application Support/com.realmacsoftware.clear.mac/LocalTasks.sqlite';
}

clear.setUser = function(_) {
    user = user;
    return clear;
};

clear.filename = function() {
    return filename();
};

clear.total = function(callback) {
    var db = new sqlite3.Database(filename());
    db.get('select count(*) from tasks;', function(err, res) {
        callback(err, res['count(*)']);
    });
};

clear.all = function(callback) {
    var db = new sqlite3.Database(filename());
    db.all('select * from tasks;', function(err, res) {
        callback(err, res);
    });
};
