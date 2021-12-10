$(function () {

	$('.header-slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/header/arrow-up.svg" alt="arrow up"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/header/arrow-down.svg" alt="arrow down"></button>',
		vertical: true,
		infinite: true,
	})

	$('.product__name').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.product__content',
		focusOnSelect: true,
		vertical: true,
		prevArrow: '<button type="button" class="product-prev"><img src="images/main/product/arrow-up.svg" alt="arrow up"></button>',
		nextArrow: '<button type="button" class="product-next"><img src="images/main/product/arrow-down.svg" alt="arrow down"></button>',
//		infinite: true,
//		centerMode: true,

	});
	
	$('.product__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product__name',
//		fade: true,
		vertical: true,
		arrows: false,
//		infinite: true,


	});


});
