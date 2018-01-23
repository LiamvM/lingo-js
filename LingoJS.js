
	var row = 5;
	var column = 5;
	var genWord = '';
	var inputs = document.getElementsByTagName('input');

	generateWord();

	(function init() {
		for (var i = 0; i < row; i++) {
			for (var j = 0; j < column; j++) {
				
				var flexBox = document.getElementById('flexbox');
				var input = document.createElement('input')
				input.setAttribute('id', 'letter' + i + '_' + j);
				input.setAttribute('maxlength', '1');
				flexBox.appendChild(input);
			    
			}
		}
	})()

	function generateWord() {
		genWord = words[Math.floor(Math.random() * words.length)];
		console.log(genWord);
	}
	
	console.log(inputs);
	var answer = ''

	window.onclick = function () {
	for (var i = 0; i < 5; i++) {
		answer += inputs[i].value

	}
	console.log(answer);
}



