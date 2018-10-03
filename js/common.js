var elem = document.querySelector('input');
var ul = document.querySelector('ul');

elem.onclick = function () {

  ul.classList.add("down");

}

jQuery(document).ready(function() {

	jQuery('input:text, textarea').addClass('styler');
	jQuery('input:text, select').styler();

});



if(window.matchMedia('(max-width: 1000px)').matches)
	{ document.getElementById('one').remove()}