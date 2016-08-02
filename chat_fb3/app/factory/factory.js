(function(){
	'use strict'
	
	angular
		.module('chat') //navBar con la mayúscula se indica a angular que son dos palabras. El de minúsculas es como se llama aquí
		.factory('chatData', chatData);

	function chatData($firebaseArray){ //se le indica de donde se obtiene la data
		//var link = new Firebase('https://chatnegrabatch10.firebaseio.com/message')
		
		//de la siguiente manera se inicializa en FB3
		var link = new firebase.database().ref();
		return $firebaseArray(link);
	}	

})();