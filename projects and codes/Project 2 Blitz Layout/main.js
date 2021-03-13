const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');
const headerDisplay = document.querySelector('#header');

menuToggle.onclick = function(){
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
	headerDisplay.classList.toggle('header--active');
}