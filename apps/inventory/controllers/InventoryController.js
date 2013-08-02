function InventoryController($scope, productFactory){
  $scope.productos = productFactory.getProducts();  
  $scope.almacen = [];
  
  $scope.total = 7;
  $scope.capacity_green = 0;
  $scope.capacity_yellow = 0;
  $scope.capacity_red = 0;

  $scope.get_capacity = function(cant){
    porcentage = (cant * 100) / $scope.total;
    if(porcentage >= 0 ) {
      $scope.capacity_green = porcentage;
      if(porcentage > 85 ){
        $scope.capacity_green = 85;
      }
    }
    if(porcentage > 85){
        $scope.capacity_yellow = porcentage - 85 ;
        if(porcentage > 95 ){
        $scope.capacity_yellow = 10;
      }
    } else {
      $scope.capacity_yellow = 0
    }


    if(porcentage > 95){
        $scope.capacity_red = porcentage - 95 ;
    } else {
        $scope.capacity_red = 0;
    }
  }

};