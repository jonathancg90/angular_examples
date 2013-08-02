angular.module('inventoryApp').factory("almacenFactory",['$http', function($http) {
	var factory = {};

	factory.getAlmacen = function() {
		var data = [];
		return data;
	}
	return factory;
}]);