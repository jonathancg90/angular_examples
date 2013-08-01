var inventoryApp = angular.module('inventoryApp',[]);

inventoryApp.config(function($routeProvider){
	$routeProvider
		.when(
			'/',
			{
				controller : 'InventoryController',
				templateUrl : 'views/inventory.html'
			})
		.otherwise({
			reditectTo : '/'
		})
});