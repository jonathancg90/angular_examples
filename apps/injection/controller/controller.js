function CategoryData($scope, $http) {
	$http.get('category.json').success(function(data){
		$scope.categories = data;
	});
	$scope.orderProp = 'name';
}