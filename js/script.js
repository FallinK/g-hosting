"use strict"
// SCROLL
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach( menuLink => {
			menuLink.addEventListener('click', onMenuLinkClick);
		});
		function onMenuLinkClick (e) {
			const menuLink = e.target;
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
				
				if(burger.classList.contains('_active')) {
					document.body.classList.remove('_lock');
					burger.classList.remove('_active');
					menuBody.classList.remove('_active');
				}
				window.scrollTo ({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault();
			}
		}
}
//BURGER MENU

const burger = document.querySelector("div[class='menu__icon']");
const menuBody = document.querySelector("div[class='menu__body']");
if(burger) {
	burger.addEventListener('click', function(){
		document.body.classList.toggle('_lock');
		burger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}