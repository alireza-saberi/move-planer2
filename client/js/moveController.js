(function(){
	var moveController = function($scope, appSettings){
		$scope.appSettings = appSettings;
		$scope.streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=51%20sherbrook%20west,%20Montreal';
		$scope.addressSearch = function(){
			var mapAddress = $scope.address.street + ', ' + $scope.address.city;
			var streetviewUrl = appSettings.googleMap + mapAddress + '';
			$scope.streetviewUrl = streetviewUrl;
			};
		// function initialize() {
		// 	var mapCanvas = angular.element($('#map'));
		// 	var mapOptions = {
  //     				center: new google.maps.LatLng(44.5403, -78.5463),
  //     				zoom: 8,
  //     				mapTypeId: google.maps.MapTypeId.ROADMAP
  //   						}
		// 	var map = new google.maps.Map(mapCanvas, mapOptions);
		// }
		// initialize();
	};
	moveController.$inject = ['$scope', 'appSettings'];
	angular.module('movePlannerApp').controller('moveController', moveController);
}());
