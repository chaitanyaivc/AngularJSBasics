var app = angular
			.module("myModule",[])
			.controller("myController",function($scope){
				var technologies = [
					{name: "c#",likes:0, dislikes:0},
					{name: "ASP.NET",likes:0, dislikes:0},
					{name: "SQL Server",likes:0, dislikes:0},
					{name: "AngularJS",likes:0, dislikes:0}
				];

				$scope.technologies = technologies;

				$scope.incrementLikes = function(technology){
					technology.likes++;
				}

				$scope.incrementDislikes = function(technology){
					technology.dislikes++;
				}
			});