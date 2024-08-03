const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
	menu.style.transition = 'all .4s ease';
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	menu.style.transition = 'all .4s ease';
});

