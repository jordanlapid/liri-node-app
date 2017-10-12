console.log('this is loaded');

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var twitter = new Twitter({
  consumer_key: 'hOCoIVW7Zhu47mtXunji4wEpF',
  consumer_secret: 'YaaPha9IIwS281CQRTDvGNCj1O8l4GLGFKPGzTMXZBYF98jM7C',
  access_token_key: '917920394937376768-VF38OuwhX3XwsUjnszYF7mviPWwsKj5',
  access_token_secret: 'qTNGEdJQ9GxgZQlR2fxiXBmw1aNGvdRYzEEPs0RtTpI2t'
});

var spotify = new Spotify({
  id: 'dc49119236e44bdfbee803e50e342cc6',
  secret: 'c45a36a7a1c34105a4e95199169dfeeb'
});

module.exports = {
	spotify: spotify,
	twitter: twitter
}


