jQuery(document).ready(function() {

	jQuery('input:text, textarea').addClass('styler');
	jQuery('input:text, select').styler();

});


if(window.matchMedia('(max-width: 1000px)').matches)
	{ document.getElementById('one').remove()}


$(document).ready(function() {
	$(".various").fancybox({
		maxWidth	  : 600,
		maxHeight	  : 500,
		fitToView	  : false,
		width		    : '100%',
		height		  : '100%',
		autoSize	  : false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		overlayShow : true,
		overlayColor: '#545'
	});
});


$(document).ready(function() {
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
		padding: 5,
		margin:  [5, 30, 5, 30],
		autoResize: true,
		closeBtn: true,
		overlayShow : true,
		overlayColor: '#545',
		overlayOpacity: 0.9,
		overlayColor: '#000'
	});
});

$(document).ready(function(){
    $('.fancybox-media').attr('rel', 'media-gallery').fancybox({
        openEffect : 'none',
        closeEffect : 'none',
        prevEffect : 'none',
        nextEffect : 'none',
        arrows : false,
        helpers : {
            media : {},
            buttons : {}
        }
    });
});