var clima = angular.module("clima", []);

clima.controller("temperatura", function($scope, $http){
	$scope.buscar = function(obtener){

		$http({

			method: "GET",
			url: "https://openweathermap.org/data/2.5/forecast?q="+obtener+",gt&appid=b6907d289e10d714a6e88b30761fae22"	

		}).then(function datos(x){
			console.log(x)
		})
	}
})