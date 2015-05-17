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
	//Open Boxes
	$('.box').click(function(){
		boxElem = document.getElementsByClassName('box');
		$(boxElem).addClass('hide');
		$('.contact-box').addClass('hide')
		contentElem = $(this).next();
		$(contentElem).fadeIn(600);
		var innerContent = $(contentElem).children('.inner-content')
		var innerHeight = $(innerContent).height();
		var contentHeight = innerHeight + 60;
		$(contentElem).height(contentHeight);
	})
	//Expand iframe
	$('.expand').click(function(){
		$('header').hide();
		$('.container').hide();
		var iframe = $(this).prev();
		var src = $(iframe).attr('src');
		var frameborder = 0;
		var iframeElem = document.createElement('iframe');
		iframeElem.setAttribute('src', src);
		iframeElem.setAttribute('frameborder', frameborder);
		iframeElem.setAttribute('id', 'expanded-iframe')
		var div = document.getElementById('full-frame');
		div.appendChild(iframeElem);
		$(iframeElem).height(windowHeight);
		$('.close').removeClass('hide')
	})
	//Close iframe
	$('.close').click(function(){
		var div = document.getElementById('full-frame');
		var iframe = document.getElementById('expanded-iframe');
		div.removeChild(iframe);
		$(this).addClass('hide')
		$('header').show();
		$('.container').show();
	})
	//Close Boxes
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