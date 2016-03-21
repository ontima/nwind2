var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: { type: String, required: true },
	priority: {type: Number}
});

var Product = mongoose.model('Product', productSchema);

module.exports = {
	Product: Product
};

