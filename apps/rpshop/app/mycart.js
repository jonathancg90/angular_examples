var myCart = angular.module('myCart',[]);

myCart.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'ProductsController',
        templateUrl: 'app/views/products.html'
    }).
    when('/product/:id',{
        controller: 'DetailController',
        templateUrl: 'app/views/details.html'
    });

});