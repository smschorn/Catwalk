class Choice {
	constructor(part, image, value) {
		this.part = part;
		this.image = image;
		this.value = value;
	}

	loadImage(){
		let imageTag = $('<img/>');
		imageTag.attr('src', this.image);
		imageTag.attr('class', 'choice');
		imageTag.attr('data-part', this.part);
		imageTag.attr('data-value', this.value);
		$('#' + this.part + '-choices').append(imageTag);
	}
}

let topChoice1 = new Choice('top', 'images/choices/top/choice-1.jpeg', 'C');
topChoice1.loadImage();

let topChoice2 = new Choice('top', 'images/choices/top/choice-2.jpeg', 'A');
topChoice2.loadImage();

let topChoice3 = new Choice('top', 'images/choices/top/choice-3.jpeg', 'B');
topChoice3.loadImage();

let bottomChoice1 = new Choice('bottom', 'images/choices/bottom/choice-1.jpeg', 'A');
bottomChoice1.loadImage();

let bottomChoice2 = new Choice('bottom', 'images/choices/bottom/choice-2.jpeg', 'C');
bottomChoice2.loadImage();

let bottomChoice3 = new Choice('bottom', 'images/choices/bottom/choice-3.jpeg', 'B');
bottomChoice3.loadImage();

let shoesChoice1 = new Choice('shoes', 'images/choices/shoes/choice-1.jpeg', 'C');
shoesChoice1.loadImage();

let shoesChoice2 = new Choice('shoes', 'images/choices/shoes/choice-2.jpeg', 'B');
shoesChoice2.loadImage();

let shoesChoice3 = new Choice('shoes', 'images/choices/shoes/choice-3.jpeg', 'A');
shoesChoice3.loadImage();

alert('Welcome to the Catwalk!  Let\'s get started.  Start creating your outfit by clicking on an article of clothing.')

const game = {
	top: null,
	bottom: null,
	shoes: null,
	readyToWalk: function() {
		if (this.top && this.bottom && this.shoes)
			$('#walk').show();
	},
	judge: function() {
		if (this.top === 'A' && this.bottom === 'A' && this.shoes === 'A') {
			alert('You slayed it!  Cover of Vogue in your future.')
		}
		else if (this.top === 'B' && this.bottom === 'B' && this.shoes === 'B') {
			alert('Oh, a risk taker...we like that, just didn\'t pay off.')
		}
		else if (this.top === 'C' && this.bottom === 'C' && this.shoes === 'C') {
			alert('Yikes, you were arrested by the fashion police!')
		}
		else {
			alert('Give it another shot.')
		}
		this.reset()
	},
	reset: function() {
		this.top = null;
		this.bottom = null;
		this.shoes = null;
		$('#walk').hide();
		const topDisplay = document.querySelector('#top')
		topDisplay.style.backgroundImage = null;
		const bottomDisplay = document.querySelector('#bottom')
		bottomDisplay.style.backgroundImage = null
		const shoesDisplay = document.querySelector('#shoes')
		shoesDisplay.style.backgroundImage = null
	}
}

const walkButton = document.querySelector('#walk')
walkButton.addEventListener('click', (event) => {
	game.judge()
})

const topDisplay = document.querySelector('#top')
const topSelection = document.querySelector('#top-choices')
topSelection.addEventListener('click', (event) => {
	if (event.target.classList.contains('choice')) {
		const url = event.target.getAttribute('src')
		topDisplay.style.backgroundImage=`url(${url})`
		topDisplay.style.backgroundSize = 'contain'
		const value = event.target.getAttribute('data-value');
		game.top = value;
		game.readyToWalk();
	}
})

const bottomDisplay = document.querySelector('#bottom')
const bottomSelection = document.querySelector('#bottom-choices')
bottomSelection.addEventListener('click', (event) => {
	if (event.target.classList.contains('choice')) {
		const url = event.target.getAttribute('src')
		bottomDisplay.style.backgroundImage=`url(${url})`
		bottomDisplay.style.backgroundSize = 'contain';
		const value = event.target.getAttribute('data-value');
		game.bottom = value;
		game.readyToWalk();
	}
})

const shoesDisplay = document.querySelector('#shoes')
const shoesSelection = document.querySelector('#shoes-choices')
shoesSelection.addEventListener('click', (event) => {
	if (event.target.classList.contains('choice')) {
		const url = event.target.getAttribute('src')
		shoesDisplay.style.backgroundImage=`url(${url})`
		shoesDisplay.style.backgroundSize = 'contain'
		const value = event.target.getAttribute('data-value');
		game.shoes = value;
		game.readyToWalk();
	}
})
