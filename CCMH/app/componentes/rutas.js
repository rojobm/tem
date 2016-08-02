(function(){
	'use strict'
	angular
		.module('bueno')//ya no se ponen corchetes porque se puso en app.js.
		.config(para_rutas) //esto indica que se llamara con el ng-view

		function para_rutas($routeProvider){
			$routeProvider
				.when('/nosotros',{	//cuando URL saea slash, jala el template
					template:'<nosotros></nosotros>'

				})
				
				.when('/servicios',{	//cuando URL saea slash, jala el template
					template:'<servicios></servicios>'

				})
				.when('/tecnologias',{	//cuando URL saea slash, jala el template
					template:'<tecnologias></tecnologias>'

				})				
				.when('/marcas',{	//cuando URL saea slash, jala el template
					template:'<marcas></marcas>'

				})	
				.when('/contacto',{	//cuando URL saea slash, jala el template
					template:'<contacto></contacto>'

				})			

				.otherwise({
					template:'<nosotros></nosotros>'//redirecTo:'/nosotros'
				})
		}
})();