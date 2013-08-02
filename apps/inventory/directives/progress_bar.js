inventoryApp.directive('progressAlmacen', [function($compile){
	return {
		// A = attribute, E = Element, C = Class and M = HTML Comment
		restrict: 'E',
		link: function(scope, element, attrs) {
			scope.updateProgress = function(element){
				var total_capacity = 19,
					total_product = this.almacen.length;
				var progress = new Array();
					progress[0] = 0; //Verde
					progress[1] = 0; //Amarrillo
					progress[2] = 0; //Rojo
				//Green = 90% , yellow = 97%, red= 3%
				capacity = (total_product * 100) / total_capacity;
				$(element.children()[1]).text(capacity.toFixed(2)+' % ');
				progress[0] = capacity;
				if(capacity > 90) {
					progress[0] = 90
					progress[1] = (capacity - 90) - progress[2];
				}
				if(capacity > 97) {
					progress[2] = capacity - 97;
				}
				var divs = element.children().children();
				$(divs).each(function( index, value ) {
					$(value).attr('style','width: '+progress[index]+'%');
				});
			};
		},
		templateUrl: 'progressAlmacen.html'
	};
}]);
