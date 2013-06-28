myCart.controller('ProductsController',function($scope, productFactory, ProductDetailService){
    $scope.products = productFactory.get_products();

    $scope.updateProduct = function(product) {
        ProductDetailService.set_product(product);
    };
});

myCart.controller('DetailController', function($scope, ProductDetailService, $routeParams){
   $scope.product = ProductDetailService.get_product();
    if($scope.product == undefined) {
        $scope.product = new Object();
        $scope.product.id =  $routeParams.id;
    }

});