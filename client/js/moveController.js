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
				console.log('Wrong entry for geocoding address!');
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
				console.log('Wrong entry for weather address!');
			});
			$scope.NYTimesPannel = true;
			var nytimesUrl = appSettings.nyTimeAPI +  $scope.address.city + appSettings.nyKey;
			var nytimesRes = $http.get(nytimesUrl);
			nytimesRes.success(function(res){
				var articles = res.response.docs;
				var newArticles = new Array(articles.length);
				//console.log(newArticles.length)
				//console.log(articles);
		        for (var i = 0; i < articles.length; i++) {
             		var article = articles[i];
             		var articleInfo = {};
             		articleInfo.headline =  article.headline.main;
             		articleInfo.url = article.web_url;
             		//console.log(articleInfo.url);
             		articleInfo.snipet = article.snippet;
             		newArticles[i] = articleInfo;
        			};		
        		$scope.newArticles = newArticles;
			}).error(function(){
				console.log('Wrong entry for New York Time!');
			});			
			};
	};
	moveController.$inject = ['$scope', 'appSettings', '$http', 'todayFacotry'];
	angular.module('movePlannerApp').controller('moveController', moveController);
}());
