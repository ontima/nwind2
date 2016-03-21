var app = angular.module('nwind', []);

app.controller('productsCtrl', function($scope, $http) {

	$scope.getProducts = function() {
		$http.get('/api/products')
		.then(function(response) {
			$scope.products = response.data;
		});
	};

	$scope.addProduct = function(product) {
		$http.post('/api/products', product)
		.then(function() {
			$scope.getProducts();
		});
	};

	$scope.getProducts();

});


