(function(){
	'use strict'

	var log ={
		templateUrl:"app/component/login_component/login.html",
		controller:loginCtrl,
	}

	function loginCtrl(Auth,$location){
		var log = this;

		log.login = function (){
			Auth.$authWithPassword({ //librería de Angular Fire
				email:log.email,
				password:log.password
			}).then(function(userData){
				console.log('usiario logeado con uid ', userData)
				$location.path('/path') //el de $ es que juega con Angular
				location.reload(); //sin $ juega con la ruta
			}).catch(function(error){
				console.log(error) //ERROR
			})
		}
	}
	angular
		.module('loginf')
		.component('log',log)
})();