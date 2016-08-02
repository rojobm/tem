(function(){
	'use strict'

	var solbasica= {
		controller:solbasicaCtrl,
		//controllerAs:'vm',
		templateUrl:'app/componentes/component_sol_basica/sol_basica.html',
	}	

	angular
		.module('bueno')
		.component('solBasica',solbasica);

	    function solbasicaCtrl($location, $scope, $firebaseObject){
	    	var prac= this;
	    	prac.usuario = firebase.auth().currentUser;
	    	prac.muestra_login = true;
	    	prac.registro= {
	    		apellido_escrito:"apellido asignado en creacion variable",
	    		nombre_escrito:"nom asignado en creacion variable"
	    	}

	    	$scope.prueba_scope="TEST SCOPE1";

	    	//prac.guarda=guarda;
	    	prac.actualiza=actualiza;
	    	prac.getmuestra=getmuestra;
	    	prac.get2muestra=get2muestra;
	    	prac.muestra=muestra;

	    	if (prac.usuario) {
	    		prac.muestra_login=false;
	    		console.log("email usuario: ", prac.usuario.email);
	    	}

	    	function getmuestra(){
	    		console.log("entro a getmuestra");
				var obj=$firebaseObject(firebase.database().ref('/clientes/'+prac.usuario.uid));
				obj.$loaded().then(function(){
					console.log("loaded record:", obj.$id, obj.someOtherKeyInData);
					console.log("antes apellido_escrito: ", prac.registro.apellido_escrito);
					prac.registro=obj;
					console.log("despues apellido_escrito: ", prac.registro.apellido_escrito);
       				// To iterate the key/value pairs of the object, use angular.forEach()
       				angular.forEach(obj, function(value, key) {
          			console.log(key, value);
          			});
				});

				//get2muestra().then(function(vel) { $("#velocity").html(vel); });
				//get2muestra().then(function(vel) {console.log("terminó getmuestra")});
	    	}

	    	function get2muestra(){
	    		console.log("entro a get2muestra");
				//return firebase.database().ref('/clientes/'+prac.usuario.uid).once('value').then(function(snapshot. {
				//prac.registro.apellido_escrito =  snapshot.val().apellido_escrito;

				//return firebase.database().ref('/clientes/'+prac.usuario.uid).once('value').then(muestra(snapshot.val()));
				//return firebase.database().ref('/clientes/'+prac.usuario.uid).once('value').then(muestra(snapshot));
				//imprimir el json
	    	}

			function muestra(snapshot){
	    		console.log("entro a muestra");
				//prac.registro.nombre_escrito ="nuevo no,bre"
				// console.log("entro 1")
				
				//firebase.database().ref('/clientes/'+prac.usuario.uid).on('value', function(snapshot) {
				//	console.log("Pasó el on()");
			  	//	$scope.prueba_scope="TEST SCOPEX";
			  	//	console.log(snapshot)
			  	//	actualiza(snapshot.val());
			  	//	console.log(snapshot.val().nombre_escrito) PROMESA DE PUNTO VAL
			  		 prac.registro.nombre_escrito = snapshot.nombre_escrito;
			  		 return(prac.registro.nombre_escrito);
			  	//	 prac.registro.apellido_escrito = snapshot.apellido_escrito;
			  	//	 yarovrr@gmail.com 
			  	
				//});
			}
	    	function actualiza(obj_snap){
				//obj_data.apellido_escrito =  obj_snap.apellido_escrito;
	   			//obj_data.nombre_escrito = obj_snap.nombre_escrito; 
	    		prac.registro.apellido_escrito =  	obj_snap.apellido_escrito		
	    		prac.registro.nombre_escrito =  	obj_snap.nombre_escrito   			
    			console.log(prac );			    		
    			console.log(obj_snap );			    		
	    	}

	    	console.log("desde afuera...: ", prac.usuario.uid,
	    		" nombre ", prac.registro.nombre_escrito,
	    		" correo ", prac.registro.correo_escrito);
	    }
})();

	    	//function guarda(){
	    	/*	console.log("Imprime el nombre: ",prac.registro.nombre_escrito);
	    		firebase.database().ref('clientes/' + cteid).update(cteaactualizar);
				//$location.path('/evcred');
            	//location.reload();				  					
	    	}*/


/*	    	function actualiza(){
	    		firebase.database().ref().child('clientes').child(prac.usuario.uid).update(prac.registro);
	    		console.log("actualización ejecutada");
	    	
	    	}
*/	    	


/*			firebase.database().ref('/clientes/'+prac.usuario.uid).once('value').then(function(snapshot) {
				prac.registro.apellido_escrito =  snapshot.val().apellido_escrito;
	    		prac.registro.nombre_escrito = snapshot.val().nombre_escrito;
	    		prac.registro.cel_escrito = 'CEL';//snapshot.val().cel_escrito;
	    		prac.registro.correo_escrito = snapshot.val().correo_escrito;
	    		prac.registro.cve_referencia = snapshot.val().cve_referencia;
	    		prac.registro.referido = snapshot.val().referido;
        		prac.registro.correo_fb = snapshot.val().correo_fb;
    			prac.registro.foto_perfil = snapshot.val().foto_perfil;    			
    			prac.calle = 'AQUI SÍ JALA';
	    		console.log("Jaló datos de: ", prac.usuario.uid,
	    			" nombre ", prac.registro.nombre_escrito,
	    			" correo ", prac.registro.correo_escrito);
  				/*if (snapshot.val().correo_fb){
  					console.log("Con correo fb: ", snapshot.val().correo_fb);
  				} else {
  					console.log("Sin correo fb: ", snapshot.val().correo_fb);
  				}
  			});
*/	    		



/*Este sí funciona para agregar un nuevo registro. Pero preferí usar solo set
	    		firebase.database().ref('clientes/' + cteid).set({
    				nombre: prac.registro.nombre_escrito,
    				correo_escrito: prac.registro.correo_escrito,
    				cel_escrito: prac.registro.cel_escrito,
    				correo_fb: prac.usuario.email,
    				foto_perfil: prac.usuario.photoURL
  				});
*/

