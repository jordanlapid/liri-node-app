//Linking keys.js file
var keys = require("./keys");
var request = require("request");

//Creating variables to store keys that are pulled from keys.js
var spotifyKeys = keys.spotify;
var twitterKeys = keys.twitter;

var command = process.argv[2];

var searchTerm = "";
var searchArray = process.argv;

switch (command){
	case "my-tweets":
	twitter();

	case "spotify-this-song":
	createSearch();
	spotify();

	case "movie-this":
	createSearch();
	// omdb();

	case "do-what-it-says":
	break;
}


function createSearch () {
	if(command === "spotify-this-song") {
		if(searchArray.length > 3) {
			for (var i = 3; i < searchArray.length; i++){
				searchTerm += searchArray[i] +" "
			}
		} else {
			searchTerm = "The Sign Ace of Base";
		}
	} else if(command === "movie-this"){
		if(searchArray.length > 3) {
			for (var i = 3; i < searchArray.length; i++){
				if(searchArray.length === 4){
					searchTerm += searchArray[i]
				} else {
					searchTerm += searchArray[i] +"+"
				}
			}
		} else {
			searchTerm = "Mr.Nobody";
		}
	}
	console.log(searchTerm);
}

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

function spotify (){
spotifyKeys.search({ type: 'track', query: searchTerm }).then(function(response) {

    console.log("Artist: " + response.tracks.items[0].artists[0].name + "\nAlbum: " + response.tracks.items[0].album.name + "\nSong: " + response.tracks.items[0].name + "\nURL: " + response.tracks.items[0].external_urls.spotify);
  })
  .catch(function(err) {
    console.log(err);
  });
}

function omdb(){

	request("http://www.omdbapi.com/?t=" + searchTerm +"&y=&plot=short&apikey=40e9cece", function(error, response, body) {
		if (!error && response.statusCode === 200) {
		body = JSON.parse(body);
		console.log("Title: " + body.Title + "\nYear: " + body.Year + "\nIMDB Rating: " + body.Ratings[0].Value +  "\nRotten Tomatoes Rating: " + body.Ratings[1].Value + "\nCountry: " + body.Country +  "\nLanguage: " + body.Language +  "\nPlot: " + body.Plot +  "\nActors: " + body.Actors);
}
});


}

function doWhatItSays(){

}