(function(){
	'use strict'
	
	angular
		.module('bueno')
		.factory('fllenaform', fllenaform);

	function fllenaform($firebaseArray){
		var link = new firebase.database().ref(); //se inicializa en firebase3
		return $firebaseArray(link);
	}	

})();