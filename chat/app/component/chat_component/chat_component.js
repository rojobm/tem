(function(){
	'use strict'

	var chat ={
		controller:chatCtrl,
		templateUrl:"app/component/chat_component/chat.html"
	}

	function chatCtrl(chatData){
		var chat=this;
		chat.messages = chatData; //se obtiene data de firebase
		chat.addMessage = addMessage; //se crea una función constructora para agregar data a firebase

		function addMessage(){ //esto es lo que se va a enviar a firebase
			chat.messages.$add({ //$add es metodo de firebase
				user:chat.user,
				message:chat.message
			})
			chat.message=""; //limpia los inputs
		}//para que aparezca en el arbo de datos
	}

	angular
	.module('chat')
	.component('chat',chat); //navBar con la mayúscula se indica a angular que son dos palabras. El de minúsculas es como se llama aquí

})();