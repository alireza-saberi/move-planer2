(function(){
	var moveController = function($scope, appSettings){
		$scope.appSettings = appSettings;
	};
	moveController.$inject = ['$scope', 'appSettings'];
	angular.module('movePlannerApp').controller('moveController', moveController);
}());