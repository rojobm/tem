(function(){
	'use strict'

	var seccab= {
		controller:seccabCtrl,
		templateUrl:'app/componentes/component_header/header.html',
	}	

	angular
		.module('bueno')
		.component('secCab',seccab);

	    function seccabCtrl($location){
	    	var prac= this;
	    	prac.usuario = firebase.auth().currentUser;
	    	prac.muestra_login = true;
	    	if (prac.usuario) {
	    		prac.muestra_login=false;
	    		//console.log("Entró al if de usuario: ", prac.usuario.email, prac.muestra_login);
	    	}        	
	    	prac.funcinisol = funcinisol;
	    	function funcinisol(){
				firebase.auth().signInWithPopup(provider).then(function(result) {
				  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
				  console.log("objeto token 1: ", token);
				  var token = result.credential.accessToken;
				  // The signed-in user info.
				  var user = result.user;
				  console.log("objeto result: ", result);
				  console.log("objeto user.ob: ", user.ob);
				  console.log("email del user: ", user.email);
				  prac.correo=user.email;				  
				  //$scope.tituloW='Llena W'
				  $location.path('/');
            	  location.reload();				

				}).catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  // The email of the user's account used.
				  var email = error.email;
				  // The firebase.auth.AuthCredential type that was used.
				  var credential = error.credential;
				});	    					
			};
	    }	  
})();