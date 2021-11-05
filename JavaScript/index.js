function typedText(texts, className) {

	//Count the word
	let count = 0;

	//count the char
	let index = 0;

	let currentText = '';
	let letter = '';
	let forward = true;

	function type(texts, className) {
	
		//after finishing a word it moves to the next one.
		if (index < 0) {
			count++;
			forward = !forward;
			index = 0;
		}
	
		//if it went through the whole array it will start from beginning.
		if (count == texts.length) {
			count = 0;
		}
	
		//current word/sentence.
		currentText = texts[count];
	
	
		//if true goes forward if false goes backward.
		if (forward) {
			letter = currentText.slice(0, ++index);
		} else {
			letter = currentText.slice(0, --index);
		}
	
		//irretation doesn't do anything.
		if (index == -1) {
			//pass
		} else {
			document.querySelector(className).textContent = letter;
		}
	
		//if it went forward then now it will backward.
		if (letter.length === currentText.length) {
			forward = !forward;
		}
	
		//how much time between each char.
		setTimeout(type, 300, texts, className);
	}

	type(texts, className);
}

export default typedText;