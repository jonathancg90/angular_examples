angular.module('frameworkFilters',[]).filter('position',function(){
	return function(input){
		if(input==1){
			return 'Primer puesto';
		} else {
			return 'Otro puesto'
		}
	}
});