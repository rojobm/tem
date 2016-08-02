(function(){
	'use strict'

	var evcred= {
		controller:evcredCtrl,
		templateUrl:'app/componentes/component_ev_cred/ev_cred.html',
	}	

	angular
		.module('bueno')
		.component('evCred',evcred);

	    function evcredCtrl(){
	    	var prac= this;
	    }
})();