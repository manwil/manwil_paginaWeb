angular.module('manwil_page')
    .controller('productoController', function ($scope) {
    	$scope.modalShow = function(a){
    		$("#myModal").modal(); 
    		switch(a) {
    			case 1:
    				$scope.background = "background_1";
                    $scope.titulo = "Salchicha con piel";
    				$scope.imagen = "img/salchicha_con_piel.jpg";
        			$scope.mensaje= "Embutida en tripa natural y elaborada a partir la una equilibrada combinación de cortes de carne vacuna, carne de cerdo, tocino y especiadas con finas y aromáticas especias, dan como resultado el exquisito sabor de este producto, realzado por el ahumado tradicional de los productos de MANWIL.";
        			break;
    			case 2:
        			$scope.background = "background_2";
                    $scope.titulo = "Salchicha tipo Viena sin piel o en paquete";
    				$scope.imagen = "img/salchicha_paqueta1.png";
        			$scope.mensaje= "La salchicha es un embutido cocido, elaborado sobre la base de carne de cerdo o carne de cerdo y vacuno, con el agregado de tocino, sal y especias, escaldadas (cocidas) y luego ahumadas hasta obtención de un color moreno claro superficial”. Las proteínas proceden de la carne.";
        			break;
        		case 3:
        			$scope.background = "background_b";
                    $scope.titulo = "Salchicha Especial";
    				$scope.imagen = "img/salchicha_especial.jpg";
        			$scope.mensaje= "Para los que buscan algo que sepa rico, que sea rápido y alimente, para comer en cualquier momento y lugar. Este producto es buena fuente de proteínas. Disfruta de todos los beneficios de los productos MANWIL son prácticos, fáciles de transportar y de almacenar.";
        			break;
        		case 4:
        			$scope.background = "background_p";
                    $scope.titulo = "Chorizo Precocido";
    				$scope.imagen = "img/chorizo_precocido1.png";
        			$scope.mensaje= "Elaborado con carne vacuna, carne de cerdo, combinada con tocino y especias seleccionadas, para condimentar este producto que respeta el sabor tradicional del chorizo criollo. Envasado al vacío.";
        			break;
        		case 5:
        			$scope.background = "background_g";
                    $scope.titulo = "Jamón";
    				$scope.imagen = "img/jamon1.png";
        			$scope.mensaje= "Un jamón blanco con una excelente relación calidad precio, sabor dulce y con el punto de sal más bajo del mercado. Fabricar un Embutido Supremo, ofrecer a nuestros clientes un embutido de calidad sin renunciar en ningún momento al proceso productivo tradicional y artesanal.";
        			break;
        		case 6:
        			$scope.background = "background_bl";
                    $scope.titulo = "Chorizo Coctelero";
    				$scope.imagen = "img/chorizo_coctelero.jpg";
        			$scope.mensaje= "El mas comun, pero irresistible, date la oportunidad de degustar el mejor sabor en chorizos. El pequeñito de la familia, ideal para entradas y los momentos para compartir con quienes queremos, fiestas y tardes de comer algo.";
        			break;
        		case 7:
        			$scope.background = "background_gl";
                    $scope.titulo = "Chorizo Español";
    				$scope.imagen = "img/chorizo_espanol.jpg";
        			$scope.mensaje= "El chorizo español es un embutido curado de carne de cerdo y especiado con pimentón que le da el color tan característico rojo.  Se sazona con otros ingredientes como ajo, clavo y más. La mezcla de carne de puerco cruda con especies se coloca en los intestinos delgados, se forman los chorizos y se curan al aire o se ahúman.";
        			break;
        		case 8:
        			$scope.background = "background_v";
                    $scope.titulo = "Salame";
    				$scope.imagen = "img/salame.jpg";
        			$scope.mensaje= "El salame es un delicioso embutido que se elabora con una mezcla de carnes de vacuno y porcino sazonadas y que es posteriormente ahumado y curado al aire, similar al salchichón.";
        			break;
        		case 9:
        			$scope.background = "background_1";
                    $scope.titulo = "Tocino Ahumado";
    				$scope.imagen = "img/tocino1.jpg";
        			$scope.mensaje= "Ahumado natural. Exquisito. Elaborado con panceta de cerdo Premium.";
        			break;
    			default:
        			$scope.background = "";
                    $scope.titulo = "";
    				$scope.imagen = "";
        			$scope.mensaje= "";
			} 


    	};
});
