var windowHeight = $(window).height();
var windowWidth = $(window).width();
var boxHeight = windowHeight / 3;
$(function(){
	//Box Height
	$(window).resize(function(){
		var windowHeight = $(window).height();
		var boxHeight = windowHeight / 3;
		$('.box').height(boxHeight);
		$('.contact-box').height(boxHeight);
	})
	$('.box').height(boxHeight);
	$('.contact-box').height(boxHeight);
	//Tooltip
	$('.icons').tooltip();
	//Open
	$('.box').click(function(){
		boxElem = document.getElementsByClassName('box');
		$(boxElem).addClass('hide');
		$('.contact-box').addClass('hide')
		contentElem = $(this).next();
		$(contentElem).fadeIn(600);
	})
	//Close
	$('.close-link').click(function(){
		$(contentElem).fadeOut(400);
		setTimeout(function(){
			$(boxElem).removeClass('hide');
			$('.contact-box').removeClass('hide')
		}, 400);
	})
	//Burger Menu
	if (windowWidth <= 760) {
        $('.icons').addClass('hide')
    }
	$(window).resize(function(){
		var windowWidth = $(window).width();
		if (windowWidth <= 760) {
            return $('.icons').addClass('hide')
        } else {
        	return $('.icons').removeClass('hide')
        }
	})
	$('.fa-bars').click(function(){
		$('.icons').toggleClass('show')
	})
})