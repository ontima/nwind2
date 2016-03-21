var app = angular.module('nwind', []);

app.controller('productsCtrl', function($scope, $http) {

	$scope.getProducts = function() {
		$scope.displayError = false;
		$http.get('/api/products')
		.then(function(response) {
			$scope.products = response.data;
		});
	};

	$scope.addProduct = function(product) {
		//console.log("add product, name: ", product.name);
		//console.log("add product, priority: ", product.priority);
		if (product.name === undefined || isNaN(product.priority)) {
			$scope.displayError = true;
			return;
		}
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

	$scope.moveUp = function(product) {
		console.log("moveUp called: ", product.name);
		var newPriority = product.priority + 1;
		$scope.updatePriority(product, newPriority);
	};

	$scope.moveDown = function(product) {
		console.log("moveDown called: ", product.name);
		var newPriority = product.priority - 1;
		$scope.updatePriority(product, newPriority);
	};

	$scope.updatePriority = function(product, priority) {
		console.log("updating priority: ", priority);
		console.log("product id : ", product._id);
		$http.put('/api/update/' + product._id + '/' + priority)
		.then(function(response){
			$scope.getProducts();
		});
	};

	$scope.getProducts();

});


