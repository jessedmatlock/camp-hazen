$(document).foundation();
$('.colors:not(.manual)').each(function () {
    var str = $(this).find('a').text();
    str = '<span>' + str.split(/\s+(?!&)/).join('</span> <span>') + '</span>';
    $(this).find('a').html(str); 
});
var slider = $("#home-slider");
	slider.owlCarousel({
		items: 1,
		loop: true,
		autoWidth: false,
		autoplay: true,
		animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
		dots: false, // paginaton dots
		nav : false, // Show next and prev buttons
	    smartSpeed:450,
		responsiveBaseElement: $('#top-header')
});  
	$(".slider-next").click(function(){
		slider.trigger('next.owl.carousel');
	});
	$(".slider-prev").click(function(){
		slider.trigger('prev.owl.carousel');
	});
	
