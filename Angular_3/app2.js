(function(){

angular.module('equalsExample', []).controller('ExampleController', ['$scope', function($scope) {
  $scope.user1 = {};
  $scope.user2 = {};
  $scope.result;
  $scope.compare = function() {
    $scope.result = angular.equals($scope.user1, $scope.user2);
  };
}]);

})();


	<h2>Ingresa la nueva contraseña dos veces</h2>
	<div ng-controller="ExampleController">
  	<form novalidate>
    <h3>User 1</h3>
    	Name: <input type="text" ng-model="user1.name">
    	Age: <input type="number" ng-model="user1.age">

    <h3>User 2</h3>
    	Name: <input type="text" ng-model="user2.name">
    	Age: <input type="number" ng-model="user2.age">

    <div>
          <br/>

