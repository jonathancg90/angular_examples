var frameworkApp = angular.module('frameworkApp',[]);


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
			'/detail',
			{
				controller: 'FrameworkController',
				templateUrl: 'views/detail.html'
			})
		.otherwise({redirectTo:'/'});
});