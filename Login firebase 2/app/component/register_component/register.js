(function(){
	'use strict'

	var register = {
		templateUrl:"app/component/register_component/register.html",
		controller:registerCtrl
	}

	function registerCtrl(Auth,$location){
		var reg=this;

		reg.register = function (){ //esto crea un usuario para después poder hacer un login
			Auth.$createUser({ //método de firebase
				email:reg.email,
				password:reg.password
/*			}).then(function(userData){ //then es una promises. Es como un call back. El userData contiene la información del usuario
				console.log('usuario creado con uid', userData)
				$location.path('/') //se define la ruta de donde se tiene para ver la información
			}).catch(function(error){
				console.log(error)
*/
			});
		}
	}

	angular
	.module('loginf')
	.component('register',register);
})();