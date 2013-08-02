function InventoryController($scope, productFactory, almacenFactory){
  $scope.productos = productFactory.getProducts();  
  $scope.almacen = almacenFactory.getAlmacen();
};