

document.addEventListener('DOMContentLoaded', () => {

	const timer = new Date('Jan 1 2022 00:00:00 ');

	const daysVal = document.querySelector(' .time-count__days .time-count__val');
	const hoursVal = document.querySelector(' .time-count__hours .time-count__val');
	const minVal = document.querySelector(' .time-count__minute .time-count__val');
	const secVal = document.querySelector(' .time-count__seconds .time-count__val');

	const daysText = document.querySelector(' .time-count__days .time-count__text');
	const hoursText = document.querySelector(' .time-count__hours .time-count__text');
	const minText = document.querySelector(' .time-count__minute .time-count__text');
	const secText = document.querySelector(' .time-count__seconds .time-count__text');

	const timeCount = () => {
		let now = new Date();
		let leftUntil = timer - now;
		console.log(leftUntil);

		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);


		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;


		let min = Math.floor(leftUntil / 1000 / 60) % 60;


		let sec = Math.floor(leftUntil / 1000) % 60;

		daysVal.textContent = days + 'д';
		hoursVal.textContent = hours + 'г';
		minVal.textContent = min + 'хв';
		secVal.textContent = sec + 'с';



	};
	timeCount();
	setInterval(timeCount, 1000)

})
document.addEventListener('DOMContentLoaded', function () {
	var script = document.createElement('script');
	script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
	script.onload = function () {
		particlesJS("snow", {
			"particles": {
				"number": {
					"value": 200,
					"density": {
						"enable": true,
						"value_area": 500
					}
				},
				"color": {
					"value": "#ffffff"
				},
				"opacity": {
					"value": 0.7,
					"random": false,
					"anim": {
						"enable": false
					}
				},
				"size": {
					"value": 5,
					"random": true,
					"anim": {
						"enable": false
					}
				},
				"line_linked": {
					"enable": false
				},
				"move": {
					"enable": true,
					"speed": 5,
					"direction": "bottom",
					"random": true,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": true,
						"rotateX": 1000,
						"rotateY": 1200
					}
				}
			},
			"interactivity": {
				"events": {
					"onhover": {
						"enable": false
					},
					"onclick": {
						"enable": false
					},
					"resize": false
				}
			},
			"retina_detect": true
		});
	}
	document.head.append(script);
});
