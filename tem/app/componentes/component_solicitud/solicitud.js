(function(){
	'use strict'

	var lasoli= {
		controller:lasoliCtrl,
		templateUrl:'app/componentes/component_solicitud/solicitud.html',
	}	

	angular
		.module('bueno')
		.component('laSoli',lasoli);

	    function lasoliCtrl($location){
	    	var prac= this;
	    	prac.usuario = firebase.auth().currentUser;
	    	prac.muestra_login = true;
	    	prac.funcinisol = funcinisol;
	    	if (prac.usuario) {
	    		prac.muestra_login=false;
	    	}

	    	function funcinisol(){
				firebase.auth().signInWithPopup(provider).then(function(result) {
				  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
				  var token = result.credential.accessToken;
				  // The signed-in user info.
				  var user = result.user;
				  prac.correo=user.email;				  
				  console.log("Va a direccionar!!!!!!!!!");
				  $location.path('/inicio'); //$location.path('/solb');
				  console.log("Direccionó!!!!!!!!!");
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