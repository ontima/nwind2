var app = angular.module('nwind', []);

app.controller('productsCtrl', function($scope, $http) {
	$http.get('/api/products')
	.then(function(response) {
		return response.data
	})
	.then(function(data){
		console.log("data: ", data);
		$scope.products = data;
	})
});