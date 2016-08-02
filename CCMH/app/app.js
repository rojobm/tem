(function(){
	'use strict'

	var elnavegador= {
		controller:navegadorCtrl,
		templateUrl:'app/componentes/navegador.html',
	}
	var elpie= {	
		controller:pieCtrl,
		templateUrl:'app/componentes/footer.html',
	}
	var seccab= {
		controller:seccabCtrl,
		templateUrl:'app/componentes/seccion_header.html',
	}
	var secico= {
		controller:secicoCtrl,
		templateUrl:'app/componentes/seccion_iconos.html',
	}
	var nosotros= {
		controller:nosotrosCtrl,
		templateUrl:'app/componentes/nosotros.html',
	}	
	var servicios={
		controller:serviciosCtrl,
		templateUrl:'app/componentes/servicios.html',		
	}
	var tecnologias={
		controller:tecnologiasCtrl,
		templateUrl:'app/componentes/tecnologias.html',		
	}
	var marcas={
		controller:marcasCtrl,
		templateUrl:'app/componentes/marcas.html',		
	}
	var contacto={
		controller:contactoCtrl,
		templateUrl:'app/componentes/contacto.html',		
	}

	angular
		.module('bueno',['ngRoute'])
		.component('elNavegador',elnavegador)
		.component('secIco',secico)
		.component('secCab',seccab)
		.component('elPie',elpie)
		.component('nosotros',nosotros)
		.component('servicios',servicios)
		.component('tecnologias',tecnologias)
		.component('marcas',marcas)
		.component('contacto',contacto);

	    function navegadorCtrl(){
	    	var prac= this;
	    	$(".button-collapse").sideNav();
	    	$(".dropdown-button").dropdown();
        	prac.titulo='Llena la solicitud y obten tu tarjeta en 10 minutos'
	    }
	    function seccabCtrl(){
	    	var prac= this;
        prac.titulo_cab='Crédito para ti'
	    }	    
	    function secicoCtrl(){
	    	var prac= this;
        prac.titulo_ico='Titulo iconos'
	    }	    	    
	    function pieCtrl(){
	    	var prac_foot= this;
        prac_foot.titulo_footer='Titulo footer'
	    }
	    function nosotrosCtrl(){
	    	var slider= this;
	    	$('.slider').slider({full_width: true});
	    }
	    function serviciosCtrl(){
	    	var var_servicios= this;
	    	var_servicios.es1=0;
	    	var_servicios.es2=0;
	    	var_servicios.es3=0;
	    	var_servicios.es4=0;
	    	var_servicios.es5=0;
	    	var_servicios.es6=0;
	    	var_servicios.muestra=muestra;
	    	$(".dropdown-button").dropdown();

        	function muestra(a_mostrar) {
        		console.log("sí");
             	if (a_mostrar == 1){
 					if (var_servicios.es1 == 0) {
 						var_servicios.es1 = 1;
 					} else {
 						var_servicios.es1 = 0;
 					}
 				}
             	if (a_mostrar == 2){
 					if (var_servicios.es2 == 0) {
 						var_servicios.es2 = 1;
 					} else {
 						var_servicios.es2 = 0;
 					}
 				} 				
              	if (a_mostrar == 3){
 					if (var_servicios.es3 == 0) {
 						var_servicios.es3 = 1;
 					} else {
 						var_servicios.es3 = 0;
 					}
 				} 				
              	if (a_mostrar == 4){
 					if (var_servicios.es4 == 0) {
 						var_servicios.es4 = 1;
 					} else {
 						var_servicios.es4 = 0;
 					}
 				} 				
              	if (a_mostrar == 5){
 					if (var_servicios.es5 == 0) {
 						var_servicios.es5 = 1;
 					} else {
 						var_servicios.es5 = 0;
 					}
 				} 				
              	if (a_mostrar == 6){
 					if (var_servicios.es6 == 0) {
 						var_servicios.es6 = 1;
 					} else {
 						var_servicios.es6 = 0;
 					}
 				} 				
         	}	    	
         	
	    }
	    function tecnologiasCtrl(){
	    	var variable= this;
	    }	    

	    function marcasCtrl(){
	    	var slider= this;
	    	$('.slider').slider({full_width: true});
	    }
	    function contactoCtrl(){
	    	var variable = this;
	    	variable.enviar=enviar;
	    	variable.nombre="";
	    	variable.apellido="";
	    	variable.telefono="";
	    	variable.email="";
	    	variable.mensaje="";

	    	function enviar(){
	    		console.log(variable.nombre);
	    		var link = "mailto:"+ "crfranco@grupoccmh.com.mx"
             + "?subject=New%20email " + escape(variable.nombre+ " " +variable.apellido +" "+ variable.email +" "+ variable.telefono)
             + "&body=" + escape(variable.mensaje); 
             	window.location.href = link;
	    	}

	    }	    
})();