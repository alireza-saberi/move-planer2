(function(){
	var moveController = function($scope, appSettings, $http){
		$scope.appSettings = appSettings;
		$scope.streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=51%20sherbrook%20west,%20Montreal';
		$scope.center = "45.5118520,-73.5698800";
		$scope.addressSearch = function(){
			var mapAddress = $scope.address.street + ', ' + $scope.address.city;
			var streetviewUrl = appSettings.googleMap + mapAddress + '';
			$scope.streetviewUrl = streetviewUrl;
			var geoUrl = appSettings.googleGeoCoding + mapAddress + '&key=' + appSettings.APIkey;
			var geocodeRes = $http.get(geoUrl);
			geocodeRes.success(function(res){
				console.log('yes!');
				var newCenter = res.results[0].geometry.location.lat + ',' + res.results[0].geometry.location.lng;
				$scope.center = newCenter;
			}).error(function(){
				console.log('wrong entry for address');
			});
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
	moveController.$inject = ['$scope', 'appSettings', '$http'];
	angular.module('movePlannerApp').controller('moveController', moveController);
}());
