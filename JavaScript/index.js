// text goes in the "texts" array.

const texts = ['Great', 'Awsome', 'Strong', 'Courages'];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let forward = true;
let irretation = 0;

function type() {
	//after finishing a word it moves to the next one.
	if (index < 0) {
		count++;
		forward = !forward;
		index = 0;
	}

    //if it went through the whole array it will start from beginning.
	if(count == texts.length) {
		count = 0;
		console.log(count + 'count');
	}

    //current word/sentence.
	currentText = texts[count];


    //if true goes forward if false goes backward.
	if (forward) {
		letter = currentText.slice(0, ++index);
	}else {
		letter = currentText.slice(0, --index);
	}

    //irretation doesn't do anything.
	if(index == -1){
		irretation++;
	}else{
		document.querySelector('.type-text').innerHTML = "It's " + letter;
	}
	
    //if it went forward then now it will backward.
	if(letter.length === currentText.length) {
		forward = !forward;
	}

    //how much time between each char.
	setTimeout(type, 300);
}

type();