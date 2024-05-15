
let input = prompt("введите текст")

function checkVowelsForEach(string){
	const vowels = ["a", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё", "a", "e", "i", "o", "u", "y"];
	let counter = 0;
	let lower = string.toLowerCase().split("");
	lower.forEach((el) => {
		if (vowels.includes(el)){
					counter++
				}
		});
	return counter
}
function checkVowelsFilter(string){
	const vowels = ["a", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё", "a", "e", "i", "o", "u", "y"];
	let lower = string.toLowerCase().split("");
	return lower
	.filter(el=>vowels.includes(el))
	.length;
}
function checkVowelsReduce(string){
	const vowels = ["a", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё", "a", "e", "i", "o", "u", "y"];
	let counter = 0;
	let lower = string.toLowerCase().split("");
	counter = lower.reduce((el,i)=>{
		el+=vowels.includes(i);
		return el;
	},0)
	return counter
}

console.log(`Количество гласных букв посчитаны с помощью forEach: ${checkVowelsForEach(input)}`)
console.log(`Количество гласных букв посчитаны с помощью filter: ${checkVowelsFilter(input)}`)
console.log(`Количество гласных букв посчитаны с помощью reduce: ${checkVowelsReduce(input)}`)