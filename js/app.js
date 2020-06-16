$(function () {
	$(".testimonials").slick({
		infinite: true,
		speed: 300,
		autoplay: true,
		autoplayspeed: 1000,
		slidesToShow: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
});

$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 20) {
			$("header").addClass("coloured-nav");
		} else {
			$("header").removeClass("coloured-nav");
		}
	});
});
