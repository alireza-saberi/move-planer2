(function(){
	var moveController = function($scope, appSettings, $http, todayFacotry){
		$scope.appSettings = appSettings;
		$scope.streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=51%20sherbrook%20west,%20Montreal';
		$scope.center = "45.5118520,-73.5698800";
		$scope.weatherPanel = false;
		$scope.NYTimesPannel = false;
		$scope.today = todayFacotry;
		$scope.addressSearch = function(){
			var mapAddress = $scope.address.street + ', ' + $scope.address.city;
			var streetviewUrl = appSettings.googleMap + mapAddress + '';
			$scope.streetviewUrl = streetviewUrl;
			var geoUrl = appSettings.googleGeoCoding + mapAddress + '&key=' + appSettings.APIkey;
			var geocodeRes = $http.get(geoUrl);
			geocodeRes.success(function(res){
				var newCenter = res.results[0].geometry.location.lat + ',' + res.results[0].geometry.location.lng;
				$scope.center = newCenter;
			}).error(function(){
				console.log('wrong entry for geocoding address');
			});
			var weatherUrl = appSettings.weatherAPI + $scope.address.city;
			var weatherRes = $http.get(weatherUrl);
			weatherRes.success(function(res){
				$scope.weatherPanel = true;
				res.main.temp = Math.round(res.main.temp - 273.15);
				res.main.temp_min = Math.round(res.main.temp_min - 273.15);
				res.main.temp_max = Math.round(res.main.temp_max - 273.15);
				$scope.temperature = res.main;
				$scope.wind = res.wind;
			}).error(function(){
				console.log('wrong entry for weather address');
			});
			$scope.NYTimesPannel = true;
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
	moveController.$inject = ['$scope', 'appSettings', '$http', 'todayFacotry'];
	angular.module('movePlannerApp').controller('moveController', moveController);
}());
