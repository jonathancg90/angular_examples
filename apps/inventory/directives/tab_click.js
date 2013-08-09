inventoryApp.directive('tabClick', function() {
    return {
    restrict: 'A',
    link: function(scope, element, attrs) {
    	element.bind('click', function(event) {
    		event.preventDefault();
            var active = attrs.id;
            var tabs = $('.tabs div.select-tabs');
            $.each(tabs, function(index, value) {
            	if($(value).attr('tab-activate') == active){
            		$(value).attr('style','display:block');
                    $('#'+active).addClass('active');
            	} else {
            		$(value).attr('style','display:none');
                    $('#'+$(value).attr('tab-activate')).removeClass('active');
            	}
            });
        });
    	}
	}
})

