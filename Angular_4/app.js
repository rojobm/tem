(function(){
	'use strict'
	
	var navbar={
		controller: navCtrl,
		templateURL: "parcials/navbar.html"
	}

	angular.module('repaso',[])
	.component('navBar', navbar); //navBar con la mayúscula se indica a angular que son dos palabras. El de minúsculas es como se llama aquí

	function navCtrl(){
		var first = this;
	}
})();