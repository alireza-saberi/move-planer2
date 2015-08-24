(function(){
	var todayFacotry = function(){
		var today = new Date();
		var weekday = new Array(7);
		weekday[0]=  "Sun";
		weekday[1] = "Mon";
		weekday[2] = "Tues";
		weekday[3] = "Wed";
		weekday[4] = "Thurs";
		weekday[5] = "Fri";
		weekday[6] = "Sat";
		var dayOfWeek = weekday[today.getDay()];
		var day = today.getDate();
		var month = today.getMonth() + 1; //January is 0!
		var year = today.getFullYear();
		if(day < 10) {
    		day = '0' + day;
					} 
		if(month < 10) {
    		month = '0' + month;
			} 
		var currentDate = {};
		currentDate.dayOfWeek = dayOfWeek;
		currentDate.day = day;
		currentDate.month = month;
		currentDate.year  = year;
		return currentDate;
	};
	angular.module('movePlannerApp').factory('todayFacotry', todayFacotry);
}());