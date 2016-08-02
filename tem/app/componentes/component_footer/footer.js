(function(){
	'use strict'

	var elpie= {	
		controller:pieCtrl,
		templateUrl:'app/componentes/component_footer/footer.html',
	}

	angular
		.module('bueno')
		.component('elPie',elpie);
	    	    
	    function pieCtrl(){
	    	var prac_foot= this;
        	prac_foot.titulo_footer='Titulo footer'
	    }

})();