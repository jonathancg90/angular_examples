function FrameworkController($scope, $routeParams, $http, FrameworkDetailService){
	//$scope.frameworkId = $routeParams.frameworkId

	$http.get('frameworks.json').success(function(data){
		$scope.frameworks = data
	});

	$scope.UpdateFramework = function(framework){
		FrameworkDetailService.set_framework(framework);
	};
};

function FrameworkDetailController($scope, FrameworkDetailService) {
	$scope.detail_framework = FrameworkDetailService.get_framework();
	$scope.mainImage = $scope.detail_framework.img[0]

	$scope.setImage = function(imgUrl){
		$scope.mainImage = imgUrl;
	};
}