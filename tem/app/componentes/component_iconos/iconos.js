(function(){
	'use strict'

	var secico= {
		controller:secicoCtrl,
		templateUrl:'app/componentes/component_iconos/iconos.html',
	}

	angular
		.module('bueno')
		.component('secIco',secico);

	    function secicoCtrl(){
	    	var prac= this;
        	prac.titulo_ico='Titulo iconos'
	    }	    	    

})();