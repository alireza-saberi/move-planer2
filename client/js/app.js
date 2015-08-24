(function(){
	var app = angular.module('movePlannerApp', ['ngMap']);
	app.constant('appSettings', {
        title:'Move Planner 2',
        version:'2.0',
        googleMap:'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=',
        googleGeoCoding: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
        APIkey: 'AIzaSyB1KfRaFuLOKHDfS3nXSR-sHcdAbLWxGmc',
        weatherAPI: 'http://api.openweathermap.org/data/2.5/weather?q=',
        nyTimeAPI: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=',
        nyKey: '&sort=newest&api-key=e320166596f1d6f222e7739711b338b2:10:62021094',
        wiki: 'http://en.wikipedia.org/w/api.php?action=opensearch&search='
    });
}());