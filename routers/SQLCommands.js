module.exports = {
	run: function (con, query) {
		con.query(query, function (err, result) {
    		if (err) throw err;
    		return result;
  		});
	}
};