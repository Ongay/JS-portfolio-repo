const menuToggle = document.querySelector('#menu-toggle');
const	mobileNav = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
	menuToggle.classList.toggle('menu-icon--active');
	mobileNav.classList.toggle('mobile-nav--active');
}