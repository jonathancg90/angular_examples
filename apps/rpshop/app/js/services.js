myCart.service('ProductDetailService',function(){
    var self =  this;
    this.set_product = function(product){
        self.product =  product;
    };
    this.get_product = function(){
        return self.product;
    };
});