function DragonBallData($scope, $http){
	$http.get('dragon_ball.json').success(function(data){
		$scope.personajes = data;
	});
}