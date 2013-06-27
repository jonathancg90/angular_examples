function FrameworkController($scope, $routeParams, $http){
	$http.get('frameworks.json').success(function(data){
		$scope.frameworks = data
	});
};