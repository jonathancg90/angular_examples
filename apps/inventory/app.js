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
			'/client',
			{
				controller: 'ClientController',
				templateUrl: 'views/client.html'
			})
		.when(
			'/order',
			{
				controller: 'OrderController',
				templateUrl: 'views/order.html'
			})
		.when(
			'/report',
			{
				controller: 'ReportController',
				templateUrl: 'views/report.html'
			})
		.when(
			'/solicitude',
			{
				controller: 'SolicitudeController',
				templateUrl: 'views/solicitude.html'
			})
		.when(
			'/supplier',
			{
				controller: 'SupplierController',
				templateUrl: 'views/supplier.html'
			})
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