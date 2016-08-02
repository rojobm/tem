//IIFE 
//
(function(){
	'use strict' //hace que las variables sean invisibles
	angular
		.module('ngapp_palin',[]) //declaración de modulo
		.controller('pracCtrl',pracCtrl); //como se ve en el HTML y como se ve en el JS

		function pracCtrl(){
			var first = this; 

			first.name = 'David';
			first.age = 18;
			first.number = 3;
			first.texto = 'hola todos';

			first.users = [
			{name:first.name,age:18,pais:'mx'},
			{name:'ricardo',age:23,pais:'mx'},
			{name:'mau',age:20,pais:'usa'},
			{name:'daniel',age:20,pais:'ruso'},
			{name:'mora',age:24,pais:'turco'},
			{name:'ruth',age:29,pais:'mx'}
			]

			//se define como se llamaran las funciones en HTML
			first.ruco=addAge;
			first.click = click;
			first.abc = hexa;
			uni_hexa = uni_hexa;

			function addAge(user){
				user.age += 1
			}

			function click(){
				console.log(first.name)
			}
			function uni_hexa(x){
				console.log("desde uni_hexa");

			}
			function hexa(email){
				console.log(email);
			}	

		}
})();