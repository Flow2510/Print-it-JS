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

slides.forEach((_, index) => {						//	pour chaque, on ingnore le premier parametre avec "_" pour pouvoir avoir l'index en deuxieme argument
	const dot = document.createElement('div');     	//   creation des dots
	dot.classList.add('dot');
	if (index === 0){
		dot.classList.add('dot_selected');
	}
	dot.addEventListener('click', () => {			//    ajout d'un event pour changer image et texte par rapport au dot cliqué
		currentIndex = index;
		changeDot();
		changeContent();
	})
	dotsContainer.appendChild(dot);	
})

const banner = document.querySelector('.banner-img')
const textBanner = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

function nextImage() {				//   fonction qui change l'image et le texte par rapport a l'index (suivant)
	currentIndex++;
	if (currentIndex > slides.length - 1){    //	sans le -1 ca marche pas car il va chercher un index de plus (vu qu'il commance a 0)
		currentIndex = 0;
	}
	changeContent();
	changeDot();
}

function previousImage() {				//   fonction qui change l'image et le texte par rapport a l'index (precedent)
	currentIndex--;
	if (currentIndex < 0){
		currentIndex = slides.length - 1;
	}
	changeContent();
	changeDot();
}

function changeDot() {				//  fonction pour enlever la classe a tous les dot et met le dot_selected par rapport a l'index
	dots.forEach(d => {
		d.classList.remove('dot_selected');
	})
	dots[currentIndex].classList.add('dot_selected');		//    selection du dot par rapport a l'index
}

function changeContent() {			//   fonction pour changer le contenu de la banniere
	banner.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	textBanner.innerHTML = slides[currentIndex].tagLine;
}