$(document).ready(function(){


	
	var _slider = new slider();
	_slider.interval(200);
	$('.left').click(function () {
		_slider.change.prev(); 
	});
	$('.right').click(function () {
		_slider.change.next();
	});
	$('.one').click(function () {
		_slider.change.to(0);
	}); 
	$('.two').click(function () {
		_slider.change.to(1);
	}); 
	$('.three').click(function () {
		_slider.change.to(2);
	});
	
	
// MENU SCROLL

	$('.js-menu-item').click(function(){
		var class_ = $(this).data('pos');
		var y = document.querySelector(class_).offsetTop;
		TweenMax.to(window, 2, {scrollTo:{y:y}, ease:Power2.easeOut});
	});





//area de imagens, page three
   $('#js-all-img').click(function(){
		//var novoTexto = document.formTexto.novoTexto.value;
		var novoTexto = "teste bla bla bla"
        document.getElementById("content").innerHTML = novoTexto;
	});


   $('#js-all-fotos').click(function(){
		/*var novoTexto = "<section class='content' id='content'>
					<img src='img/imagem1.png'>
					<img src='img/imagem2.png'>
					<img src='img/imagem3.png'>
					<img src='img/imagem4.png'>
					<img src='img/imagem5.png'>
					<img src='img/imagem6.png'>
			  </section>";*/

		//var novoTexto = "teste bla bla bla"
        document.getElementById("content").innerHTML = novoTexto;
	});

});

	
function adicionarTexto() {
    var novoTexto = document.formTexto.novoTexto.value;
    document.getElementById("texto").innerHTML += "\\r\\n"+novoTexto;
}
