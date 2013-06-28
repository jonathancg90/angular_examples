function CategoryCtrl($scope, $http, categoryStorage){
	$http.get('data/category.json').success(function(data){
        $scope.category = data;
    });
};