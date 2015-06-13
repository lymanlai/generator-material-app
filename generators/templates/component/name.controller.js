(function () {
	'use strict';

	// register the controller as <%= classedName %>Controller
	angular
		.module('<%= scriptAppName %>.<%= _.slugify(name) %>')
		.controller('<%= classedName %>Controller', <%= classedName %>Controller);

	// add <%= classedName %>Controller dependencies to inject
	// <%= classedName %>Controller.$inject = ['$router'];

	/**
	 * <%= classedName %>Controller constructor
 	 */
	function <%= classedName %>Controller() {
		var vm = this;

		// view model bindings
		vm.title = '<%= name %>';
		vm.doSomething = doSomething;

		// view model implementations
		function doSomething() {
			return [vm.title, 'a sublime controller'].join(' - ');
		}
	}

})();
