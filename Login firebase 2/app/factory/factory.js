(function(){
	'use strict'
	
	angular
		.module('loginf') //navBar con la mayúscula se indica a angular que son dos palabras. El de minúsculas es como se llama aquí
		.factory('Auth', authServicio);

	function authServicio($firebaseAuth){ //se le indica de donde se obtiene la data
		var ref = new Firebase('https://chatnegrabatch10.firebaseio.com/message')
		//var ref = new Firebase('https://proyectochat-d61f6.firebaseio.com');// se pasa la url sin la /data
		return $firebaseAuth(ref); //el Auth se usa cuando no se pide /data en la línea anterior
	}	

})();