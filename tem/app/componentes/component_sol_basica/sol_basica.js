(function(){
	'use strict'

	var solbasica= {
		controller:solbasicaCtrl,
		templateUrl:'app/componentes/component_sol_basica/sol_basica.html',
	}

	angular
		.module('bueno')
		.component('solBasica',solbasica);

	    function solbasicaCtrl($scope, $firebaseObject){
	    	var prac= this;
	    	prac.usuario = firebase.auth().currentUser;
	    	prac.reg= {
	    		apellido_escrito:"",
	    		nombre_escrito:"",
	    		cel_escrito:"",
	    		correo_escrito:"",
	    		cve_referencia:"",
	    		referido:"",
        		correo_fb:"",
    			foto_perfil:"",

    			calle:"",
    			numext:"",
    			numint:"",
    			cp:"",
    			col:"",
    			del:"",
    			ocupacion:""
	    	}
	    	prac.guarda=guarda;
	    	prac.guardaycontinua=guardaycontinua;

	    	if (prac.usuario){
				prac.reg.correo_fb= prac.usuario.email;
    			prac.reg.foto_perfil= prac.usuario.photoURL;	    		
	    	
				var obj=$firebaseObject(firebase.database().ref('/clientes/'+prac.usuario.uid));
				obj.$loaded().then(function(){
					//console.log("loaded record:", obj.$id, obj.someOtherKeyInData);
					//console.log("antes apellido_escrito: ", prac.reg.apellido_escrito);
					prac.reg=obj;
					//console.log("despues apellido_escrito: ", prac.reg.apellido_escrito);					
	       			//angular.forEach(obj, function(value, key) {
	          		//console.log(key, value);
	          		//});					
	          	});
			}
			
			function guarda(){
	    		//firebase.database().ref('clientes/' + prac.usuario.uid).update(prac.reg);
				firebase.database().ref('clientes/' + prac.usuario.uid).set({
		    		apellido_escrito:prac.reg.apellido_escrito,
		    		nombre_escrito:prac.reg.nombre_escrito,
		    		cel_escrito:prac.reg.cel_escrito,
		    		correo_escrito:prac.reg.correo_escrito,
		    		cve_referencia:prac.reg.cve_referencia,
		    		referido:prac.reg.referido,
	        		correo_fb: prac.usuario.email,
	    			foto_perfil: prac.usuario.photoURL,
	    			calle:prac.reg.calle,
	    			numext:prac.reg.numext,
	    			numint:prac.reg.numint,
	    			cp:prac.reg.cp,
	    			col:prac.reg.col,
	    			del:prac.reg.del,
	    			ocupacion:prac.reg.ocupacion
  				});
	    	}

			function guardaycontinua(){
	    		//envía email
				emailjs.send("gmail","template_4pUUDIJd",{
					to_email: prac.reg.correo_escrito,
					nombre: prac.reg.nombre_escrito,
					codigo_email: "392810"
				})
				.then(function(response) {
				   console.log("Envío de emial exitoso. status=%d, text=%s", response.status, response.text);
				   console.log("Enviado a: ", prac.reg.correo_escrito, prac.reg.nombre_escrito);
				}, function(err) {
				   console.log("No se pudo realizar envío de emial. error=", err);
				});	    		
	    		//envía sms
	    		/*firebase.database().ref('clientes/' + prac.usuario.uid).update(prac.reg);
				if (prac.reg.referido){
					$location.path('/evcred');
            		location.reload();
            	} else {
					$location.path('/solc1');
            		location.reload();            		
            	}*/				  				
	    	}

	    }
})();