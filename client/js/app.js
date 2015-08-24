(function(){
	var app = angular.module('movePlannerApp', ['ngMap']);
	app.constant('appSettings', {
        title:'Move Planner 2',
        version:'2.0',
        googleMap:'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=',
        googleGeoCoding: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
        APIkey: 'AIzaSyB1KfRaFuLOKHDfS3nXSR-sHcdAbLWxGmc',
        weatherAPI: 'http://api.openweathermap.org/data/2.5/weather?q='

    });
}());