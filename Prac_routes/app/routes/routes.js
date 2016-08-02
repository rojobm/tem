(function(){
	'use strict'
	angular
		.module('pracRoutes')//ya no se ponen corchetes porque se puso en app.js.
		.config(david) //esto indica que se llamara con el ng-view

		function david($routeProvider){
			$routeProvider
				.when('/',{	//cuando URL saea slash, jala el template
					template:'<h3>hola</h3>'

				})
				.when('/texto',{	//cuando URL saea slash, jala el template
					template:'<var-mia></var-mia>'

				})		
				.when('/aaa',{	//cuando URL saea slash, jala el template
					template:'<radio-boton></radio-boton>'

				})				
				.otherwise({
					redirecTo:'/'
				})
		}
})();