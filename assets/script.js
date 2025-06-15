const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector('.arrow_left');

leftArrow.addEventListener('click', () => {
	alert("gauche")
})

const rightArrow = document.querySelector('.arrow_right');

rightArrow.addEventListener('click', () => {
	alert("droite")
})

const dotsContainer = document.querySelector('.dots');

slides.forEach((image, index)){
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
	if (index === 0){
		dot.classList.add('dot_selected');
	}
}