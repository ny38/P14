document.addEventListener('DOMContentLoaded', function () {
	const topButton = document.getElementById('top');

	function toggleTopButton() {
		if (window.scrollY > 100) {
			topButton.style.bottom = '20px';
		} else {
			topButton.style.bottom = '-60px';
		}
	}

	window.addEventListener('scroll', toggleTopButton);

	topButton.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
});
