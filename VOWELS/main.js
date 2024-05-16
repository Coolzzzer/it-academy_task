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

console.log(`Количество гласных букв: ${checkVowels(input)}`)