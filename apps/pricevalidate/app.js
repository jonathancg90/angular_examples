var ValidateApp = angular.module('ValidateApp',[]);

ValidateApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			controller: 'CategoryCtrl',
			templateUrl: 'views/form.html'
		});
});