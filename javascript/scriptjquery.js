$(document).ready(function() {


/*$(window).scroll(function(){
  $(".shopright").stop().animate({"marginTop": ($(window).scrollTop()) + "px", }, "slow" );
});

$(window).scroll(function(){
  $(".shopright").animate({"marginBot": ($(window).scrollBottom()) + "px", }, "slow" );
});*/

	var shop = $('.shopright');
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




});






