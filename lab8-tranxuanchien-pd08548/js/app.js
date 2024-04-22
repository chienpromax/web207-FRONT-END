var app = angular.module("myapp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "bai2/home.html"
        })
        .when("/about", {
            templateUrl: "bai2/about.html"
        })
        .when("/contact", {
            templateUrl: "bai2/contact.html"
        })
        .when("/feedback", {
            templateUrl: "bai2/feedback.html"
        })
        .when("/faq", {
            templateUrl: "bai2/faq.html"
        })
        .when("/login", {
            templateUrl: "bai2/account/login.html"
        })
        .when("/register", {
            templateUrl: "bai2/account/register.html"
        })
        .when("/forgot", {
            templateUrl: "bai2/account/forgot.html"
        })
        .when("/logoff", {
            redirectTo: "/home"
        })
        .when("/change", {
            templateUrl: "bai2/account/change.html"
        })
        .when("/profile", {
            templateUrl: "bai2/account/profile.html"
        })
        .when("/orders", {
            templateUrl: "bai2/account/orders.html"
        })
        .when("/products", {
            templateUrl: "bai2/account/products.html"
        })
        .when("/category/:id", {
            templateUrl: "bai2/ProductList.html",
            controller: "categoryCtrl"
        })
        .when("/supplier/:id", {
            templateUrl: "bai2/ProductList.html",
            controller: "supplierCtrl"
        })
        .when("/special/:id", {
            templateUrl: "bai2/ProductList.html",
            controller: "specialCtrl"
        })
        
        .otherwise({
            redirectTo: "/home"
        });
});
app.controller("categoryCtrl", function ($scope, $routeParams) {
    $scope.title = "CATEGORY MANAGER";
    $scope.id = $routeParams.id;
});
app.controller("specialCtrl", function ($scope, $routeParams) {
    $scope.title = "SPECIAL MANAGER";
    $scope.id = $routeParams.id;
});

app.controller("supplierCtrl", function ($scope, $routeParams) {
    $scope.title = "SUPPLIER MANAGER";
    $scope.id = $routeParams.id;
});

