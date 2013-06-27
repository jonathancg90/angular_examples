frameworkApp.service('FrameworkDetailService',function(){
	var self = this;

	this.set_framework = function(framework){
		self.framework = framework;
	};

	this.get_framework = function(){
		return self.framework
	};

});