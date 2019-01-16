$(document).ready(function() {

    var owl = $("#brends-slider");
    owl.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        center: false, //если нужны обрезаные края
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            },
        }
    });

	$('#logIn').click(function(){
		$('.overlay').fadeIn();
		$('.form-modal').fadeIn();
		$('.form-modal_close').click(function(){
			$('.overlay').fadeOut();
			$('.form-modal').fadeOut();
		});
		$('.overlay').click(function(){
			$('.overlay').fadeOut();
			$('.form-modal').fadeOut();
		});
	});

}); //END READY
