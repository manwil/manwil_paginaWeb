angular.module('manwil_page')
    .controller('HomeController', function ($scope) {
    	
       	// create a message to display in our view
       	$scope.message = 'Everyone come and see how good I look!';
       	//$('.carousel').carousel();

       	$scope.myInterval = 2000;
  		$scope.noWrapSlides = false;
  		$scope.active = 0;
  		var slides = $scope.slides = [];
  		var currIndex = 0;
  		var currIndexImage = 1;

  		$scope.addSlide = function() {
    		/*var newWidth = 600 + slides.length + 1;*/
    		slides.push({
      		image: 'img/' + currIndexImage +".jpg",
      		text: ['Calidad','Sabor','Variedad'][slides.length % 4],
      		id: currIndex++
    		});
    		currIndexImage ++;
  		};

  		$scope.randomize = function() {
    		var indexes = generateIndexesArray();
    		assignNewIndexesToSlides(indexes);
  		};

  		for (var i = 0; i < 3; i++) {
    		$scope.addSlide();
  		}

  		// Randomize logic below

  		function assignNewIndexesToSlides(indexes) {
    		for (var i = 0, l = slides.length; i < l; i++) {
      			slides[i].id = indexes.pop();
    		}
  		}

  		function generateIndexesArray() {
    		var indexes = [];
    		for (var i = 0; i < currIndex; ++i) {
      			indexes[i] = i;
    		}
    		return shuffle(indexes);
  		}

  		// http://stackoverflow.com/questions/962802#962890
  		function shuffle(array) {
    		var tmp, current, top = array.length;

    		if (top) {
      		while (--top) {
        		current = Math.floor(Math.random() * (top + 1));
        		tmp = array[current];
        		array[current] = array[top];
        		array[top] = tmp;
      		}
    	}

    	return array;
  	}
});