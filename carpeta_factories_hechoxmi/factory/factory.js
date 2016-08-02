(function(){
	'use strict'

	angular
		.module('starwars')
		.factory('starwarsApi',starwarsApi); //sólo se hace la definición del módulo

	    function starwarsApi($resource){
        return $resource('http://gateway.marvel.com/v1/public/characters/character/:name')//los ":" es para poner variales en la URL
	    }
	    //'http://swapi.co/api/:category/:id'
})();