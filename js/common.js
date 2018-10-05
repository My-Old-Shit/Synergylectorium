if(window.matchMedia('(max-width: 1000px)').matches){

	document.getElementById('one').remove()}

if(window.matchMedia('(max-width: 1000px)').matches){

	document.getElementById('two').remove()}

jQuery(document).ready(function() {

	jQuery('input:text, textarea').addClass('styler');
	jQuery('input:text, select').styler();

	$(".popup-video").fancybox({
		maxWidth	  : 600,
		maxHeight	  : 500,
		width		    : '100%',
		height		  : '100%',
		padding     : 0
	});

	$(".popup-map").fancybox({
		maxWidth	  : 800,
		maxHeight	  : 800,
		width		    : 500,
		height		  : 500,
	});

		$(".open-form").fancybox({
		maxWidth	  : 600,
		maxHeight 	: 600,
		fitToView 	: false,
		width	  	  : '100%',
		height		  : '100%',
		autoSize	  : false,
		closeClick	: false,
		openEffect	: 'fade',
		closeEffect	: 'fade',
		padding     : 5,
		margin      : [5, 30, 5, 30],
		autoResize  : true
	});

});











