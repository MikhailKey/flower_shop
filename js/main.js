window.addEventListener('DOMContentLoaded', function() {


//popup
let more = document.getElementsByClassName('show-button'),
overlay = document.querySelector('.popup-bg'),
close = document.querySelector('.popup-close');

for (let i = 0; i < more.length; i++) {
	more[i].addEventListener('click', function() {
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	})
}

close.addEventListener('click', function() {
	overlay.style.display = 'none';
	document.body.style.overflow = 'visible';
})

//scroll
$("a[href^='#']").click(function () {
	var _href = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(_href).offset().top  + "px"},1000);
return false;
});
//Скрытие меню при клике на ссылку
let link = document.getElementsByClassName('menuToggle-link'),
	switchStatus = document.querySelector('.switch');
for (let i = 0; i < link.length; i++) {
	link[i].addEventListener('click', function() {
		switchStatus.checked = false
	})
}
});

document.addEventListener('mousedown', function(e) 
{
	let window = document.querySelector('.popup-content'),
		overlay = document.querySelector('.popup-bg');

	if (!window.contains(e.target)) 
	{
		overlay.style.display = 'none';
		document.body.style.overflow = 'visible';
	}
})
$(document).ready(function() {
$('.owl-carousel').owlCarousel({
	nav: true,
	autoplay : 5000,
	autoplaySpeed: 1500,
	autoplayHoverPause: true,
	smartSpeed: 500, 
	navElement: 'button',
	navText: ['<img class="ourshop-arrow"src="images/ourshop/arrows/left-arrow.svg" alt="">', '<img class="ourshop-arrow"src="images/ourshop/arrows/right-arrow.svg" alt="">'],
	center: true,
	loop: true,
	items: 1,
	margin: 10,
	stagePadding: 150,
	responsive: {
		0: {
			margin: 0,
			stagePadding: 0,
		},
		600: {
			margin: 0,
			stagePadding: 0,
		},
		900: {
			margin: 10,
			stagePadding: 150,
		}
	}
});
})