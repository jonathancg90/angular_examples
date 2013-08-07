function InventoryController($scope, productFactory, almacenFactory){
  $scope.productos = productFactory.getProducts();  
  $scope.almacen = almacenFactory.getAlmacen();
  $scope.productoById =  function(id){
  	var producto = new Object();
  	angular.forEach($scope.productos, function(value, key){
  		if(id == value.id){
  			producto = value;
  		}
	});
	return producto;
  }

  $scope.productDelete = function (product) {
    var index = $scope.productos.indexOf(product);
    if (index != -1) {
        $scope.productos.splice(index, 1);
    }
}
};