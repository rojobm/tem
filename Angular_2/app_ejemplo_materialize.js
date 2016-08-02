//IIFE 
//
(function(){
	'use strict'
	var esemero= {
		controller:pracCtrl,
		template:`
   <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="http://materializecss.com/images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  		`,
	}
	angular
		.module('practica2',[]) //declaración de modulo
		.component('eseMero',esemero);
 
	    function pracCtrl(){
	    	var prac= this;
	    }

}());