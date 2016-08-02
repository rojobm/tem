(function(){
	'use strict'

	angular
		.module('starwars')
		.factory('starwarsApi',starwarsApi); //sólo se hace la definición del módulo

	    function starwarsApi($resource){
        return $resource('http://swapi.co/api/:category/:id')//los ":" es para poner variales en la URL
	    }
	    
})();