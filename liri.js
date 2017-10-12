//Linking keys.js file
var keys = require("./keys");

//Creating variables to store keys that are pulled from keys.js
var spotifyKeys = keys.spotify;
var twitterKeys = keys.twitter;

var command = process.argv[2];

switch (command){
	case "my-tweets":
	twitter();

	case "spotify-this-song":
	break;

	case "movie-this":
	break;

	case "do-what-it-says":
	break;
}


// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

function twitter (){
	var params = {screen_name: 'gc8ftw'};
	twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			for (var i = 0; i < tweets.length; i++){
				var j = i + 1
				console.log("Tweet # " + (j) + ": " + tweets[i].text)
			}
		}
	});
}

