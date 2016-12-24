$(document).ready(function() {


/*$(window).scroll(function(){
  $(".shopright").stop().animate({"marginTop": ($(window).scrollTop()) + "px", }, "slow" );
});

$(window).scroll(function(){
  $(".shopright").animate({"marginBot": ($(window).scrollBottom()) + "px", }, "slow" );
});*/

	/*var shop = $('.shopright');
	var pos_init = shop.offset().top;
	shop.css("position", "absolute");
	$(window).stop().scroll(function(){
		if ($(window).scrollTop() > pos_init)
		{
			$('.shopright').css({
				'position': 'absolute',
				'top': '289px'
			});
		}
		else
		{ 
			$('.shopright').css({
				'position': 'absolute',
				'top': '-704px'
			});
		}
	});
*/

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.bar .level');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}



$(window).scroll(function(){
    checkAnimation();
});


});








