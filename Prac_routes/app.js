(function(){
	'use strict'

	var varmia= {
		controller:pracCtrl,
		templateUrl:'app/componentes/primer_mio.html',
	}

	var radioboton={
		controller:controlRadio,
		templateUrl:'app/componentes/botones_radio.html',
	}

	angular
		.module('pracRoutes',['ngRoute']).component('varMia',varmia).component('radioBoton',radioboton); //sólo se hace la definición del módulo

 
	    function pracCtrl(){
	    	var prac= this;
        prac.name='Nombre Primer mio'
	    }

	    function controlRadio(){
	    	var pracRadio= this;
        pracRadio.titulo='Nombre para el radio'
	    }
})();