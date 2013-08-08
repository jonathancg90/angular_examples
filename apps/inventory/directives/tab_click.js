inventoryApp.directive('tabClick', function() {
    return {
    restrict: 'A',
    scope: {
      ngModel: '='
    },
    link: function(scope, element, attrs) {
    	element.bind('click', function(event) {
    		event.preventDefault();
    		debugger;
    		// Watching for categories in order to add google images to each one.
            scope.$watch(attrs.ngModel, function(ngModel) {
                if (ngModel)
                    scope.updateAttribute(categories, 'updateImage');
            });

            var active = attrs.ngModel;
            scope.tab1 = 1;
            var tabs = $('.tabs div');
            $.each(tabs, function(index, value) {
            	if($(value).attr('show-tab') == active){
            		$(value).attr('ng-show',1);
            	} else {
            		$(value).attr('ng-show',0);
            	}
            });
        });
    	}
	}
})

