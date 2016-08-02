(function(){
	'use strict'

    var list={
    	templateUrl:"app/component/list_component/list.html",
    	controller:listCtrl
    }

    function listCtrl($firebaseArray){
    	var list = this;

		//var ref = new Firebase('https://practicabatch10.firebaseio.com/data');
		var ref = new Firebase('https://proyectochat-d61f6.firebaseio.com/data');    	

    	list.data = $firebaseArray(ref)

    	$('.collapsible').collapsible({
    		accordion : false
    	});
    }


	angular
		.module('loginf')
		.component('list',list);
})();