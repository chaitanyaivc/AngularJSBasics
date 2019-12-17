var app = angular
			.module("myModule",[])
			.controller("myController", function($scope){

				var employees = [
					{name:"Ben", dateOfBirth: new Date("November 23,1980"), gender: "Male", salary: 55000},
					{name:"Sara", dateOfBirth: new Date("August 12,1986"), gender: "Female", salary: 72000},
					{name:"Mark", dateOfBirth: new Date("January 24,1994"), gender: "Male", salary: 55000},
					{name:"Pam", dateOfBirth: new Date("March 27,1996"), gender: "Male", salary: 34000},
					{name:"Todd", dateOfBirth: new Date("December 16,1998"), gender: "Female", salary: 88000}
				];
				$scope.employees = employees;

				$scope.rowLimit = 3;
			});