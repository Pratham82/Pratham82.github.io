const backToTopButton = document.querySelector("#back-to-top-btn");
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
	if (window.pageYOffset > 300) {
		// Show backToTopButton
		if (!backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnExit");
			backToTopButton.classList.add("btnEntrance");
			backToTopButton.style.display = "block";
			navbar.style.backgroundColor = "rgba(0, 0, 0, 0.455)";
		}
	} else {
		// Hide backToTopButton
		if (backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnEntrance");
			backToTopButton.classList.add("btnExit");
			navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
			setTimeout(function () {
				backToTopButton.style.display = "none";
			}, 250);
		}
	}
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
	const targetPosition = 0;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	const duration = 200;
	let start = null;

	window.requestAnimationFrame(step);

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		window.scrollTo(
			0,
			easeInOutCubic(progress, startPosition, distance, duration)
		);
		if (progress < duration) window.requestAnimationFrame(step);
	}
}

function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t * t + b;
	t -= 2;
	return (c / 2) * (t * t * t + 2) + b;
}

var typed = new Typed(".animate", {
	// Waits 1000ms after typing "First"
	strings: ["Developer", "Minimalist", "Gamer"],
	typeSpeed: 70,
	backSpeed: 60,
	loop: true,
});


// 
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});