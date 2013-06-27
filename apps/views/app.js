var frameworkApp = angular.module('frameworkApp',['frameworkFilters']);


frameworkApp.config(function ($routeProvider){
	$routeProvider
		.when(
			'/',
			{
				controller: 'FrameworkController',
				templateUrl: 'views/home.html'
			})
		.when(
			'/list',
			{
				controller: 'FrameworkController',
				templateUrl: 'views/list.html'
			})
		.when(
			'/detail/:frameworkId',
			{
				controller: 'FrameworkDetailController',
				templateUrl: 'views/detail.html'
			})
		.otherwise({redirectTo:'/'});
});