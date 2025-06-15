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
	previousImage();
})

const rightArrow = document.querySelector('.arrow_right');

rightArrow.addEventListener('click', () => {
	nextImage();
})

const dotsContainer = document.querySelector('.dots');
let indexActuel = 0

slides.forEach((image, index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
})

const banner = document.querySelector('.banner-img')
const textBanner = document.querySelector('#banner p');

function nextImage() {
	indexActuel++;
	if (indexActuel > 3){
		indexActuel = 0;
	}
	banner.src = `./assets/images/slideshow/${slides[indexActuel].image}`;
	textBanner.innerHTML = slides[indexActuel].tagLine;
}

function previousImage() {
	indexActuel--;
	if (indexActuel < 0){
		indexActuel = 3;
	}

	banner.src = `./assets/images/slideshow/${slides[indexActuel].image}`;
	textBanner.innerHTML = slides[indexActuel].tagLine;
}