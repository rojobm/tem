//IIFE 
//
(function(){
	'use strict'
	var esemero= {
		controller:pracCtrl,
		templateUrl:'card.html',
	}
	angular
		.module('practica2',[]) //declaración de modulo
		.component('eseMero',esemero);
 
	    function pracCtrl(){
	    	var prac= this;
        prac.name='Nombre enviado'
	    }

}());