window.addEventListener('DOMContentLoaded', function() {

	//slider
    let slideIndex = 1,
	slides = document.getElementsByClassName('ourshop-slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.ourshop-slider-dots'),
	dots = document.getElementsByClassName('dot');
	showSlides()
function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	};
	if (n < 1) {
		slideIndex = slides.length;
	};
	for (let i=0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	for (let i=0; i < dots.length; i++) {
		dots[i].classList.remove('dot-active');
	}
	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].classList.add('dot-active');
}
function plusSlides(n) {
	showSlides(slideIndex +=n);
}
function currentSlide(n) {
	showSlides(slideIndex = n)
}
prev.addEventListener('click', function() {
	 plusSlides(-1);
})
next.addEventListener('click', function() {
	plusSlides(1);
})
dotsWrap.addEventListener('click', function(e) {
	for (let i=0; i < dots.length + 1; i++) {
		if (e.target.classList.contains('dot') && event.target === dots[i-1]) {
			currentSlide(i)
		}
	}
})
//popup
let more = document.getElementsByClassName('	show-button'),
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