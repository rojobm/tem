(function () {
	'use strict'
	var nav = {
		templateUrl:"app/component/nav_component/nav.html",
		controller:navCtrl
	}

	function navCtrl(Auth,$location){ //Auth es ;$location es la ubicacion en texto
		var nav = this;
		nav.userLoggedIn=Auth.$getAuth(); // devuelve la información de quien está logeuago
		console.log('desde nav', nav.userLoggedIn);

		nav.logout = function(){
			Auth.$unauth(); //esta da la funcionalidad de logout
			$location.path('/'); //esto redirecciona
			location.reload();
		}
	}


	angular
	.module('login')
	.component('navBar',navBar);
})