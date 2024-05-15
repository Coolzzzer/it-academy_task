let text = [];
const input = document.getElementById("input");
function addToWordArray() {
		const wordsSplit = input.value.split(" ");
		text = wordsSplit.filter(word => word.trim() !== "");
		console.log(text);
}
function searchLongestWords(){
	if (text !== ""){
		let longestWords = text.sort((a, b) => b.length - a.length).slice(0,3);
		alert(longestWords.join("; "));
	} else{
		alert("Слов не найдено!")
	}
}