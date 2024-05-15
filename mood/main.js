"use strict";

function randomDiap(n, m) {
	return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
	const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
	let checkRepeat = {};
	console.log('цветов: ' + colorsCount);
	for (let i = 1; i <= colorsCount;) {
			const n = randomDiap(1, 7);
			if(!checkRepeat[n]){
				checkRepeat[n] = true;
				let colorName = colors[n];
				i++;
				console.log(colorName)
			}
	}
}

mood(3);

//cctd