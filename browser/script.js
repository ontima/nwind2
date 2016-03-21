var app = angular.module('nwind', []);

app.controller('productsCtrl', function($scope, $http) {

	$scope.getProducts = function() {
		$http.get('/api/products')
		.then(function(response) {
			$scope.products = response.data;
		});
	};

	$scope.addProduct = function(product) {
		$http.post('/api/product', product)
		.then(function() {
			$scope.getProducts();
		});
	};

	$scope.deleteProduct = function(product) {
		var toDelete = product._id;
		console.log("toDelete: ", toDelete);
		$http.delete('/api/product/' + toDelete)
		.then(function(response){
			$scope.getProducts();
		})
	};

	$scope.getProducts();

});


