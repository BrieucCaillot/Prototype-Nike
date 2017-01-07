$(document).ready(function() {

	$('#wish').click(function() {
		if ($(this).addClass('liked')) {
			$(this).css('background', 'url(images/firstblock/container/wishhover.png) no-repeat');
		} else {
			$(this).hasClass('liked');
			$(this).removeClass('liked');
			$(this).css('background', 'url(images/firstblock/container/wish.png) no-repeat');
		}});
});






