angular.module('inventoryApp').factory("productFactory", ['$http', function($http) {

	var factory = {};

	factory.getProducts = function() {
		var data = [
					  	{
					  		"id":1,
					  		"images": [
					  			"img/productos/product1.jpg",
					  			""
					  		],
					  		"name": "Piqueos"
					  	},
					  	{
					  		"id":2,
					  		"images": [
					  			"img/productos/product2.jpg",
					  			""
					  		],
					  		"name": "Perfumes"
					  	},
					  	{
					  		"id":3,
					  		"images": [
					  			"img/productos/product3.jpg",
					  			""
					  		],
					  		"name": "Agua"
					  	},
					  	{
					  		"id":4,
					  		"images": [
					  			"img/productos/product4.jpg",
					  			""
					  		],
					  		"name": "Piqueos"
					  	},
					  	{
					  		"id":5,
					  		"images": [
					  			"img/productos/product5.jpg",
					  			""
					  		],
					  		"name": "Piqueos"
					  	},
					  	{
					  		"id":6,
					  		"images": [
					  			"img/productos/product6.jpg",
					  			""
					  		],
					  		"name": "Piqueos"
					  	},
					  	{
					  		"id":7,
					  		"images": [
					  			"img/productos/product7.jpg",
					  			""
					  		],
					  		"name": "Piqueos"	
					  	}
		  			];
		return data;
	}

	return factory;
}]);