(function(){
	'use strict'

	var spotifyPlayer = {
		templateUrl:"factory/spotify_component/spotify.html",
		controller:spotifyCtrl
	}

	function spotifyCtrl(spotifySearch){ //se inyecta la factory
		var spotify = this;

		spotify.audio = new Audio; //Audio es un objeto de Javascript
		spotify.play = play;
		spotify.song = null; //es para limpiar la variable
		spotify.playlist = null;
		spotify.search = doSearch; //la variable es igual a la función
		//spotify.milliseconds = milliseconds;

		console.log(spotifySearch);
//lo que se usa en el html
//ng-submit="$ctrl.search()
//ng-model="$ctrl.song_name"

		function play(song){ //funcipon para reproducir la canción
			spotify.song=song;
			spotify.audio.pause();
			spotify.audio.src = song.preview_url;
			spotify.audio.play();
		}

		function doSearch() {
			console.log(spotify.song_name)
			spotifySearch.get({song:spotify.song_name})
			.$promise
				.then(function(response){
					spotify.playlist = response.tracks.items;//se guardan todas las canciones que se parecen a la busqueda
					console.log(spotify.playlist)
					spotify.play(response.tracks.items[0])//reproduce la primera canción que regrsa el API
				})
		}
	}

	angular
		.module('spotify')
		.component('spotifyPlayer',spotifyPlayer);
})();