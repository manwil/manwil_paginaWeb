var app = angular.module('manwil_page', ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.config(['$routeProvider',
    function (
        $routeProvider
    ) {
          $routeProvider
            .when("/", {
                templateUrl : "template/inicio.html",
                controller: "HomeController"
            })
            .when("/inicio", {
                templateUrl : "template/inicio.html",
                controller: "HomeController"
            })
            .when("/producto", {
                templateUrl : "template/producto.html",
                controller: "productoController"
            })
            .when("/empresa", {
                templateUrl : "template/empresa.html",
                controller : "empresaController"
            })
            .when("/pedido", {
                templateUrl : "template/pedido.html"
            })
            .when("/contacto", {
                templateUrl : "template/contacto.html",
                controller : "contacto-controller"
            })
            .otherwise({
                redirectTo: '/inicio'
            });
}]);


/*
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/inicio.html"
    })
    .when("/inicio", {
        templateUrl : "template/inicio.html",
        controller: "js/inicio_controller.js"
    })
    .when("/producto", {
        templateUrl : "template/producto.html"
    })
    .when("/pedido", {
        templateUrl : "template/pedido.html"
    })
    .when("/contacto", {
        templateUrl : "template/contacto.html"
    })
});*/