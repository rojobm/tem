(function(){
	'use strict'

	var lasoli2= {
		controller:lasoli2Ctrl,
		templateUrl:'app/componentes/solicitud2.html',
	}	
	angular
		.module('bueno',['ngRoute', 'firebase'])
		.component('laSoli2',lasoli2);

	    function lasoli2Ctrl(){
	    	var solicitud2= this;
        	solicitud2.titulo='Continua tu solicitud'
	    }
})();

	//.component('iniSol',iniSol);
	/*var iniSol= {
		controller:iniSolCtrl,
		templateUrl:'app/componentes/inisol.html',
	}*/	
	    /*function iniSolCtrl(){
	    	var objiniSol= this;
	    	provider.addScope('user_birthday');
	    	provider.addScope('user_hometown');
			objiniSol.titulo='Login';
	    }*/
