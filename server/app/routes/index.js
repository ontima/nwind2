'use strict';

const router = require('express').Router();
module.exports = router;

var Product = require('../../db/models').Product;
console.log("Product: " , Product);

router.get('/products', function(req, res, next) {
	Product.find({}).sort({priority: 1})
	.then(function(products) {
		res.send(products);
	})
	.catch(next);
});

  // create a new product
router.post('/products', function(req, res, next){
  	var newProduct = new Product({
  		name: req.body.productName,
  		priority: req.body.productPriority 
  	});

  	newProduct.save()
  	.then(function(product){
  		console.log(product);
  		res.send(product);
  	})
  	.catch(next);
  	// var product = req.body.productName;
  	// var priority = req.body.productPriority;
  	// console.log("product: ", product);
  	// console.log("priority: ", priority);

  	// return Product.save({
  	// 	name: req.body.productName,
  	// 	priority: req.body.productPriority
  	// })
  	// .then(function(product) {
  	// 	res.redirect('/');
  	// });
  });


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
