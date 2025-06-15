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
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener('click', () => {
	previousImage();
})

rightArrow.addEventListener('click', () => {
	nextImage();
})

const dotsContainer = document.querySelector('.dots');
let currentIndex = 0

slides.forEach((image, index) => {					//   creation des dots
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
	if (index === 0){
		dot.classList.add('dot_selected');
	}

	dot.addEventListener('click', () => {			//    ajout d'un event pour changer image et texte par rapport au dot cliqué
		currentIndex = index;
		changeDot();
		changeContent();
	})
})



const banner = document.querySelector('.banner-img')
const textBanner = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

function nextImage() {				//   fonction qui change l'image et le texte par rapport a l'index (suivant)
	currentIndex++;
	if (currentIndex > 3){
		currentIndex = 0;
	}
	changeContent();
	changeDot();
}

function previousImage() {				//   fonction qui change l'image et le texte par rapport a l'index (precedent)
	currentIndex--;
	if (currentIndex < 0){
		currentIndex = 3;
	}
	changeContent();
	changeDot();
}

function changeDot() {				//  fonction pour enlever la classe a tous les dot et met le dot_selected par rapport a l'index
	dots.forEach(d => {
		d.classList.remove('dot_selected');
	})
	dots[currentIndex].classList.add('dot_selected');
}

function changeContent() {
	banner.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	textBanner.innerHTML = slides[currentIndex].tagLine;
}