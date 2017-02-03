var giphy = 	require( 'giphy' )( 'dc6zaTOxFJmzC' ),
		request = require('request'),
		util = 		require('../util');

module.exports = function (param) {
	var	channel		= param.channel;

	giphy.trending(function(err, resp, res){
		var top_trend = resp.data[0].bitly_url;

		console.log(top_trend);
		util.postMessage(channel, top_trend);
	});


	// request("http://api.giphy.com/v1/gifs?ids=feqkVgjJpYtjy,7rzbxdu0ZEXLy", function (err, response, body) {
	// 	var info = [];
	//
	// 	console.log(body);
	//
	// 	util.postMessage(channel, "Hello World");
	// });

};
