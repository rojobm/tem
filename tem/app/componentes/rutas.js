(function(){
	'use strict'
	angular
		.module('bueno')//ya no se ponen corchetes porque se puso en app.js.
		.config(para_rutas) //esto indica que se llamara con el ng-view

		function para_rutas($routeProvider){
			$routeProvider
				.when('/inicio',{	//cuando URL saea slash, jala el template
					template:'<sec-cab></sec-cab><sec-ico></sec-ico>'

				})
				.when('/solicitud',{	//cuando URL saea slash, jala el template
					template:'<la-soli></la-soli>' //'<ini-sol></ini-sol>' login antigupo

				})		
				.when('/solb',{	//cuando URL saea slash, jala el template
					template:'<sol-basica></sol-basica>'

				})						
				.when('/solc1',{	//cuando URL saea slash, jala el template
					template:'<sol-comp></sol-comp>'

				})										
				.when('/evcred',{	//cuando URL saea slash, jala el template
					template:'<ev-cred></ev-cred>'

				})						
				.when('/solicitud2',{	//cuando URL saea slash, jala el template
					template:'<la_soli2></la-soli2>'

				})		
				.otherwise({
					template:'<sec-cab></sec-cab><sec-ico></sec-ico>'//redirecTo:'/nosotros'
				})
		}
})();