window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrusel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carrusel__indicador',
        arrows: {
            prev: '.carrusel__anterior',
            next: '.carrusel__siguiente'
        },
		responsive: [
			{
			  // screens greater than >= 450px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 3
			  }
			},{
			  // screens greater than >= 800px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 4
			  }
			}
		]
    });
});