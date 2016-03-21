'use strict';

const router = require('express').Router();
module.exports = router;

var Product = require('../../db/models').Product;

router.get('/products', function(req, res, next) {
	Product.find({}).sort({priority: 1})
	.then(function(products) {
		res.send(products);
	})
	.catch(next);
});

  // create a new product
router.post('/product', function(req, res, next){
  	var newProduct = new Product({
  		name: req.body.name,
  		priority: req.body.priority 
  	});

  	newProduct.save()
  	.then(function(response){
  		res.send(response);
  	})
  	.catch(next);
  });

router.delete('/product/:id', function(req, res, next){
	Product.findByIdAndRemove(req.params.id)
	.then(function(response){
		res.send(response);
	})
	.catch(next);
});

router.put('/update/:id/:priority', function(req, res, next) {
	console.log("updating: ", req.params.id, req.params.priority);
	Product.findById(req.params.id)
	.then(function(product){
		product.priority = req.params.priority;
		return product.save();
	})
	.then(function(response){
		res.send(response);
	})
	.catch(next);
});

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
