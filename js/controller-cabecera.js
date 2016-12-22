angular.module('manwil_page')
    .controller('controller-cabecera', function ($scope, $routeParams,$location) {
      
      //codigo para el tab menu para el efecto de quedarse en un tab marcado segun su location 
      var cadena = $location.path(); 
      cadena = cadena.substr(1);
      /*$("."+cadena+" > div > .font-size-big").addClass("boder_bottom_1_white");*/

      if (cadena == "inicio") {$(".figure_modify").addClass("background_1_1");};
      if (cadena == "empresa") {$(".figure_modify").addClass("background_2_2");};
      if (cadena == "producto") {$(".figure_modify").addClass("background_3_3");};
      if (cadena == "contacto") {$(".figure_modify").addClass("background_4_4");};
      $scope.pintar_menu = function(name){

      	$(".figure_modify").removeClass("background_1_1");
      	$(".figure_modify").removeClass("background_2_2");
      	$(".figure_modify").removeClass("background_3_3");
      	$(".figure_modify").removeClass("background_4_4");


     	if (name == "inicio") {$(".figure_modify").addClass("background_1_1");};
      	if (name == "empresa") {$(".figure_modify").addClass("background_2_2");};
      	if (name == "producto") {$(".figure_modify").addClass("background_3_3");};
      	if (name == "contacto") {$(".figure_modify").addClass("background_4_4");};
      };

});