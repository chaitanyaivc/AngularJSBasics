var app = angular.module("myApp",[]);
	app.directive("myFirstDirective",function(){
		return {
			template : "This is my first directive"
		};
	});