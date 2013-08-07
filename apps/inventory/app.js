var inventoryApp = angular.module('inventoryApp',[]);

inventoryApp.config(function($routeProvider){
	$routeProvider
		.when(
			'/reception',
			{
				controller : 'InventoryController',
				templateUrl : 'views/inventory.html'
			})
		.when(
			'/supplier',
			{
				controller: 'SupplierController',
				templateUrl: 'views/supplier.html'
			}
			)
		.when(
			'/',
			{
				controller : 'InventoryController',
				templateUrl : 'views/inventory.html'
			})
		.otherwise({
			reditectTo : '/reception'
		})
});