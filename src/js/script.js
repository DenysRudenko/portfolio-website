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

$(window).scroll(function () {
	if ($(this).scrollTop() > 800) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});

$('.pageup').click(function () {
	$('html, body').animate({ scrollTop: 0 }, 800);
});


document.addEventListener('scroll', function () {
	const sidepanel = document.querySelector('.sidepanel');
	const sidepanelLinks = document.querySelectorAll('.sidepanel__link, .sidepanel__divider, .sidepanel__text span, .sidepanel__link svg path');

	if (window.scrollY > 1000) {
		sidepanelLinks.forEach(element => {
			element.style.color = '#000';
			if (element.tagName === 'path') {
				element.style.fill = '#000';
			}
			if (element.classList.contains('sidepanel__divider')) {
				element.style.backgroundColor = '#000';
			}
		});
	} else if (window.scrollY > 400) {
		sidepanelLinks.forEach(element => {
			element.style.color = '#fff';
			if (element.tagName === 'path') {
				element.style.fill = '#fff';
			}
			if (element.classList.contains('sidepanel__divider')) {
				element.style.backgroundColor = '#fff';
			}
		});
	} else {

		sidepanelLinks.forEach(element => {
			element.style.color = '#000';
			if (element.tagName === 'path') {
				element.style.fill = '#000';
			}
			if (element.classList.contains('sidepanel__divider')) {
				element.style.backgroundColor = '#000';
			}
		});
	}
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
	lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

VanillaTilt.init(document.querySelectorAll(".portfolio__item"), {
	max: 5,
	speed: 100
});





