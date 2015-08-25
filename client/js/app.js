(function(){
	var app = angular.module('movePlannerApp', ['ngMap', 'pascalprecht.translate']);
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

    app.config(['$translateProvider', function ($translateProvider) {
    	$translateProvider.translations('en', {
    		'STREET': 'Street',
    		'CITY': 'City',
    		'SUBMIT': 'Submit',
    		'WHERE': 'Where do you want to live?',
    		'MADEWITH': 'Made with',
    		'BY': 'by',
    		'VERSION': 'Version',
    		'TEMP': 'Temperature',
    		'PRESSURE':'Pressure',
    		'HUMID': 'Humidity',
    		'TEMPMIN':'Temp Min',
    		'TEMPMAX': 'Temp Max',
    		'WINDSPEED':'Wind Speed',
    		'WINDDIRECTION': 'Wind Direction',
    		'RWPLINKS': 'Relevant Wikipedia Links',
    		'NYTARTICLES': 'New York Times Articles'
    	});

    	    $translateProvider.translations('fr', {
    		'STREET': 'Rue',
    		'CITY': 'Ville',
    		'SUBMIT': 'Soumettre',
    		'WHERE': 'Où voulez-vous habiter?',
    		'MADEWITH': 'Fabriqué avec',
    		'BY': 'avec',
    		'VERSION': 'Version',
    		'TEMP': 'Température',
    		'PRESSURE':'Pression',
    		'HUMID': 'Humidité',
    		'TEMPMIN':'Temp Min',
    		'TEMPMAX': 'Temp Max',
    		'WINDSPEED':'Vitesse du vent',
    		'WINDDIRECTION': 'Direction du vent',
    		'RWPLINKS': 'Liens pertinents Wikipédia',
    		'NYTARTICLES': 'New York Times Articles'
    	});

    	$translateProvider.translations('sp', {
    		'STREET': 'Calle',
    		'CITY': 'Ciudad',
    		'SUBMIT': 'Enviar',
    		'WHERE': '¿Donde quieres vivir?',
    		'MADEWITH': 'Hecho con',
    		'BY': 'por',
    		'VERSION': 'Versión',
    		'TEMP': 'Temperature',
    		'PRESSURE':'Presión',
    		'HUMID': 'Humedad',
    		'TEMPMIN':'Temperatura Mínima',
    		'TEMPMAX': 'Temperatura Max',
    		'WINDSPEED':'Velocidad Del Viento',
    		'WINDDIRECTION': 'Dirección del viento',
    		'RWPLINKS': 'Enlaces relevantes Wikipedia',
    		'NYTARTICLES': 'New York Times los artículos'
    	});
    	$translateProvider.preferredLanguage('en');    	    
    }]);
}());