(function(){
	var app = angular.module('movePlannerApp', []);
	app.constant('appSettings', {
        title:'Move Planner 2',
        version:'2.0',
        googleMap:'http://maps.googleapis.com/maps/api/streetview?size=600x400&location='
    });
}());