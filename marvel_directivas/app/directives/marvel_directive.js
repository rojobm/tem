//las directivas son las que se usaron anteriormente. Actualmente se usan components.
(function(){
	'use strict'

	angular
		.module('marvel')
		.directive('marvelComponent',marvelComponent);

	function marvelComponent(){
		var directive = {
			restrict:'EA',
			templateUrl:"app/directives/marvel.html",
			controller:marvelCtrl,
			controllerAs:'hero', //este es el equivalente al $controll
			binToController:true,
		};
		return directive;
	}

	function marvelCtrl(marvelData){
		var marvel = this;
		marvel.superheros = null
		
		marvelData.get()//objetos para controlar la ejecución asíncrona de javascript
		.$promise
			.then(function(response){
				marvel.superheros = response.data.results //data.results es lo que regresa Marvell
				//el arreglo marvel.superheros ya tendrá el arreglo para accesarlo con ng-repeat
			})
	}
})();

