(function(){
	'use strict'

	angular
		.module('spotify')
		.factory('spotifySearch',spotifySearch);

	function spotifySearch($resource){ //el $resource siempre va en una factory
		return $resource('https://api.spotify.com/v1/search?type=track&q=:song&market=MX');
	}

})();