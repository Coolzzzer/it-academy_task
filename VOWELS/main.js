<<<<<<< HEAD
let input = prompt("введите текст")

function checkVowels(string){
	const vowels = ["a", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё", "a", "e", "i", "o", "u", "y"];
	let counter = 0;
	for(let i = 0; i < string.length; i++){
		let lower = string[i].toLowerCase();
		if (vowels.includes(lower)){
			counter++
		}
	}
	return counter;
}
=======
let input = prompt("введите текст")

function checkVowels(string){
	const vowels = ["a", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё", "a", "e", "i", "o", "u", "y"];
	let counter = 0;
	for(let i = 0; i < string.length; i++){
		let lower = string[i].toLowerCase();
		if (vowels.includes(lower)){
			counter++
		}
	}
	return counter;
}
>>>>>>> 7936cebb20c1b7d2372ec8c72c36c4d13acf74b8
console.log(`Количество гласных букв: ${checkVowels(input)}`)