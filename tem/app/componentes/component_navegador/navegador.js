(function(){
	'use strict'

	var elnavegador= {
		controller:navegadorCtrl,
		templateUrl:'app/componentes/component_navegador/navegador.html',
	}

	angular
		.module('bueno')
		.component('elNavegador',elnavegador);


	    function navegadorCtrl($location){
	    	var prac= this;	    	
	    	prac.usuario = firebase.auth().currentUser;	    	
	    	prac.muestra_login = true;

	    	if (prac.usuario) {
	    		prac.muestra_login=false;
	    		console.log("Entró al if de usuario: ", prac.usuario);

	    	}
        	
	    	prac.funcinisol = funcinisol;
	    	prac.terminasesion = terminasesion;

	    	function funcinisol(){
				firebase.auth().signInWithPopup(provider).then(function(result) {
				  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
				  var token = result.credential.accessToken;
				  // The signed-in user info.
				  var user = result.user;
				  console.log("objeto result: ", result);
				  console.log("objeto user.ob: ", user.ob);
				  console.log("email del user: ", user.email);
				  prac.correo=user.email;
				  $location.path('/solb'); //ESTE NO REDIRECCIONA
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
			function terminasesion(){
				firebase.auth().signOut();
            	$location.path('/solb'); //ESTE SÍ REDIRECCIONA
            	location.reload();				
				console.log("Sesión cerrada");

			};
	    }
})();