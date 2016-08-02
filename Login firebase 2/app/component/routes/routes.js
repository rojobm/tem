(function(){
'use strict'

angular
.module('loginf')
.config(config);

function config($routeProvider){
	$routeProvider
	.when('/',{
		template:'<log></log>'
	})
	.when('/data',{
		template:'<list></list>'
	})
	.when('/agregar',{
		template:'<add></add>'
	})
	.when('/registro',{
		template:'<register></register>'
	})
}
})();