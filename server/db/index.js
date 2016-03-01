var r = require('rethinkdb');
var connection = null;
var databaseName = 'craylist';

r.connect({
    host: 'localhost',
    port: 28015
}, function(err, conn) {
    if (err) throw err;
    connection = conn;
	connection.use(databaseName)
})

module.exports = connection;