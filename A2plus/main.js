"use strick"
let string = prompt("введите текст");

function removingSpaces(str){
	let start = 0;
	let end = str.length - 1;
	for(let i = 0;i < str.length;i++){
		if(str[i] !== " "){
			start = i;
			break
		}
	}
	if(str == 0){
		console.log("The string consists only of spaces!");
		return str ="";
	}else{
		for(let i = str.length - 1;i >= 0;i--){
			if(str[i] !== " "){
				end = i;
				break
			}
		}
		if(((end-start)-str.length)==-1){
			console.log("The string does not need to remove spaces")
			return str;
		}else{
			let result = str.substring(start, end + 1);
			return result;
		}
	}
}
alert(`!${removingSpaces(string)}!`)

