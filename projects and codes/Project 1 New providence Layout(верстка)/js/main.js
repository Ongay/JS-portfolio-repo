			// Menu navigation

const menuToggle = document.querySelector('#header-menu');
const headerNav = document.querySelector('#header-nav');
const headerNavClose = document.querySelector('#nav-close');

menuToggle.onclick = function(){
	headerNav.classList.toggle('header-nav--active');
}

headerNavClose.onclick = function(){
	headerNav.classList.toggle('header-nav--active');
}


const watchVideo = document.querySelector('#popup');
const	videoItself = document.querySelector('#video');
const closeVideo = document.querySelector('#close');

watchVideo.onclick = function(){
	videoItself.classList.toggle('video--active');
}

closeVideo.onclick = function(){
	videoItself.classList.toggle('video--active');
}


			// Fixed header on scroll

const headerScroll = document.querySelector('header');

$(window).on('scroll', function(){
	if($(window).scrollTop()) {
		$(headerScroll).addClass('header--scroll');
	}
	else {
		$(headerScroll).removeClass('header--scroll');
	}
})

			// Video




// $(watchVideo).on('click', function(){
// 	$(videoItself).addClass('video--active');
// })

// $(watchVideo).on('click', function(){
// 	$('video').classList.toggle('video--active');
// })