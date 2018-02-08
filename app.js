class Choice {
	constructor(part, image) {
		this.part = part;
		this.image = image;
	}

	loadImage(){
		let imageTag = $('<img/>');
		imageTag.attr('src', this.image);
		imageTag.attr('class', 'choice');
		imageTag.attr('data-part', this.part);
		imageTag.click(function(imageLeft) {
		});
		$('#' + this.part + '-choices').append(imageTag);
	}
}

let topChoice1 = new Choice('top', 'images/choices/top/choice-1.jpeg');
topChoice1.loadImage();

let topChoice2 = new Choice('top', 'images/choices/top/choice-2.jpeg');
topChoice2.loadImage();

let topChoice3 = new Choice('top', 'images/choices/top/choice-3.jpeg');
topChoice3.loadImage();

let bottomChoice1 = new Choice('bottom', 'images/choices/bottom/choice-1.jpeg');
bottomChoice1.loadImage();

let bottomChoice2 = new Choice('bottom', 'images/choices/bottom/choice-2.jpeg');
bottomChoice2.loadImage();

let bottomChoice3 = new Choice('bottom', 'images/choices/bottom/choice-3.jpeg');
bottomChoice3.loadImage();

let shoesChoice1 = new Choice('shoes', 'images/choices/shoes/choice-1.jpeg');
shoesChoice1.loadImage();

let shoesChoice2 = new Choice('shoes', 'images/choices/shoes/choice-2.jpeg');
shoesChoice2.loadImage();

let shoesChoice3 = new Choice('shoes', 'images/choices/shoes/choice-3.jpeg');
shoesChoice3.loadImage();

const topDisplay=document.querySelector('#top')
const topSelection=document.querySelector('#top-choices')
topSelection.addEventListener('click', (event) => {
	if (event.target.classList.contains('choice')) {
		const url = event.target.getAttribute('src')
		topDisplay.style.backgroundImage=`url(${url})`
		topDisplay.style.backgroundSize = 'contain'
	}
})

const bottomDisplay=document.querySelector('#bottom')
const bottomSelection=document.querySelector('#bottom-choices')
bottomSelection.addEventListener('click', (event) => {
	if (event.target.classList.contains('choice')) {
		const url = event.target.getAttribute('src')
		bottomDisplay.style.backgroundImage=`url(${url})`
		bottomDisplay.style.backgroundSize = 'contain'
	}
})

const shoesDisplay=document.querySelector('#shoes')
const shoesSelection=document.querySelector('#shoes-choices')
shoesSelection.addEventListener('click', (event) => {
	if (event.target.classList.contains('choice')) {
		const url = event.target.getAttribute('src')
		shoesDisplay.style.backgroundImage=`url(${url})`
		shoesDisplay.style.backgroundSize = 'contain'
	}
})
