// This makes any element draggable
// Usage: <div draggable>Foobar</div>
inventoryApp.directive('draggable', function() {
  return {
    // A = attribute, E = Element, C = Class and M = HTML Comment
    restrict:'A',
    //The link function is responsible for registering DOM listeners as well as updating the DOM.
    link: function(scope, element, attrs) {
      element.draggable({
        revert:true
      });
    }
  };
});
 
// This makes any element droppable
// Usage: <div droppable></div>
inventoryApp.directive('droppable', function($compile) {
  return {
    restrict: 'A',
    link: function(scope,element,attrs){
      //This makes an element Droppable
      element.droppable({
        drop:function(event,ui) {
          /*var dragIndex = angular.element(ui.draggable).data('index'),*/
          var dragIndex = parseInt(angular.element(ui.draggable).attr('data-index')),
          //var product = angular.element(ui.draggable).attr('data-index'),
              reject = angular.element(ui.draggable).data('reject'),
              dragEl = angular.element(ui.draggable).parent(),
              dropEl = angular.element(this);

          if (dragEl.hasClass('productos') && !dropEl.hasClass('productos') && reject !== true) {
            var product = scope.productoById(dragIndex)
            scope.almacen.push(product);
            debugger;
            scope.productDelete(product);
            //scope.get_capacity(scope.almacen.length);
            scope.updateProgress($('progress-almacen'));
            //alert('ingreso al almacen');
          } else if (dragEl.hasClass('almacen') && !dropEl.hasClass('almacen') && reject !== true) {
            scope.productos.push(scope.almacen[dragIndex]);
            scope.almacen.splice(dragIndex, 1);
            scope.updateProgress($('progress-almacen'));
            //scope.get_capacity(scope.almacen.length);
            //alert('ingreso al inventario');
          }
          scope.$apply();
        }
      });
    }
  };
});    