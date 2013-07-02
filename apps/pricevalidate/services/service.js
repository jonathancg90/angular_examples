'use strict';

ValidateApp.service('categoryStorage', function() {
	var self = this;
    self.categories = [];
    return self.categories
});

frameworkApp.service('FrameworkDetailService',function(){
	var self = this;

	this.set_framework = function(framework){
		self.framework = framework;
	};

	this.get_framework = function(){
		return self.framework
	};
});