(function(){
	'use strict'

	var add = {
		templateUrl:"app/component/add_component/add.html",
		controller:addCtrl
	}

	function addCtrl($firebaseArray){
		var agregar = this;

		//var ref = new Firebase('https://practicabatch10.firebaseio.com/data');
		var ref = new Firebase('https://proyectochat-d61f6.firebaseio.com/data');

		//para que funcine lo de abajo se debe inyectar lo de $firebaseArray
		//trae el arreglo de datos de firebase
		agregar.data = $firebaseArray(ref)

		agregar.add = add; //este add se le puede dar cualquier nombre

		function add(){
			agregar.data.$add({ // el $add sí importa que tenga ese nombre
				//las variable de abajo se toman de la vista con ng-model
				nombre:agregar.name,
				correo:agregar.email,
				message:agregar.text
			});

			//se limpian los inputs para que pareceira que se enviaron
			agregar.name="";
			agregar.email="";
			agregar.text="";
		}

	}

    angular
    .module('loginf')
    .component('add',add);

})();