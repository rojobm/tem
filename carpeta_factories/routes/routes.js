(function(){
	'use strict'

	angular
		.module('starwars')
		.config(config); //sólo se hace la definición del módulo

		config.$inject = ['$routeProvider']; //para cuando se minifica
 
	    function config($routeProvider){
	    	$routeProvider
		    	.when('/',{
		    		template:`<character category="'people'" id="1"></character>`//people es una constante
		    	})
		    	.when('/planets',{
		    		template:`<character category="'planets'" id="2"></character>`//people es una constante
		    	})
		    	.otherwise('/',{
		    		template:""
		    	})

		    }
})();