var app=angular.module('myapp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: 'partial/login.html',
			controller : 'loginn'
	})
		.when('/register', {
			controller : 'registerUser',
			templateUrl: 'partial/register.html'
	})
		.when('/addVisitor', {
			templateUrl: 'partial/AddVisitor.html',
			controller : 'addVisitor'
	})
		.when('/viewVisitor', {
			templateUrl: 'partial/ViewVisitor.html',
			controller : 'viewvisitors'
	})
		.when('/editVisitor', {
			templateUrl: 'partial/EditVisitor.html',
			controller : 'edit'
	})
		.when('/login', {
			templateUrl: 'partial/login.html'
	})
		.when('/signout', {
			templateUrl: 'partial/login.html',
			controller: 'signout'
	})
		.otherwise({
	        redirectTo: 'partial/login.html'
    });

}]);

app.controller("loginn", ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
	
	$scope.signin = {};
	
	$scope.login=function(){
		$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		console.log($scope.signin);
		$http({
			method : 'POST',
			url : 'php/login.php',
			data : $scope.signin
		}).success(function(data){
			if (data == "0") {
				$location.path('/addVisitor');
				$rootScope.val = true;
			}else {
				window.alert("Invalid UserId or Password.!");
			}
		});
	};

}]);


app.controller("registerUser", ['$scope', '$http', '$location', function($scope, $http, $location) {
	
	$scope.register = {};

	$scope.registerReceptionist = function() {
		$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';	
		$http({
			method : 'POST',
			url : 'php/registerReceptionist.php',
			data : $scope.register
		}).success(function() {
			$scope.register = {};
			window.alert("Data inserted successfully!");
			$location.path('/');
		});
	};
	
}]);


app.controller('edit', ['$scope', '$http', function Ctrl($scope, $http) {
	
	$scope.visitors = {
		contacts: [{
		}],
		selected: {},
		reset: {}
	};

    $http({
        method : 'GET',
        url : 'php/ViewVisitor.php',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).success(function(data){
        if (data!="") { 
        $scope.visitors.contacts = data;
     	}
    });

	$scope.getTemplate = function(contact) {
        if (contact.Visitor_id === $scope.visitors.selected.Visitor_id) return 'edit';
        else return 'display';
    };

    $scope.editContact = function (contact) {
        $scope.visitors.selected = angular.copy(contact);
        console.log("In Edit " + $scope.visitors.selected);
    };

    $scope.saveContact = function (contact) {
        $http({
            method: "post",
            url: "php/editVisitor.php",
            data: {
            	firstname:contact.VisitorFirstName,
            	lastname: contact.VisitorLastName,
            	email: contact.VisitorEmail,
            	intime:contact.VisitorInTime,
            	outtime: contact.VisitorOutTime
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function (data) {
            alert(data);
            $scope.visitors.selected = {};
        });
    };

    $scope.reset = function () {
       $scope.visitors.selected = $scope.visitors.reset;
       contact = $scope.visitors.selected;
    };


}]);

app.controller('addVisitor', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	$scope.Visitor = {};
	
	$scope.add = function(){
		console.log($scope.Visitor);
		$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		$http({
			method : 'POST',
			url : 'php/Add_Visitor.php',
			data : $scope.Visitor
		}).success(function(){
			$scope.Visitor = {};
			window.alert("Data inserted successfully!");
			$location.path('/viewVisitor');
		});
	};

}]);

app.controller('viewvisitors', ['$scope', '$http', function($scope, $http){
	
	$scope.visitors = {};
	
	$http({
        method : 'GET',
        url : 'php/ViewVisitor.php',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).success(function(data){
        if (data!="") { 
        	$scope.visitors = data;
        	console.log($scope.visitors);
		}
    });

}]);

app.controller('signout',['$scope', '$http', '$location', function($scope, $http, $location){
	
	$http({
		method : 'GET',
		url : 'php/signout.php',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	});
	
	$location.path('/');

}]);