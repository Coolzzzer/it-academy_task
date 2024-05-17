"use strick"
let string = prompt("");

function isPalindrome(str){
	let newStr = "";
	str = str.toLowerCase();
	for(let i = 0;i < str.length;i++){
		if(
			 str[i] == " " || str[i] == "ь" || str[i] == "ъ" 
		|| str[i] == "," || str[i] == "." || str[i] == "!" 
		|| str[i] == "?" || str[i] == "%" || str[i] == "№" 
		|| str[i] == ":" || str[i] == ";" || str[i] == "-"){
		} else if(str[i] == "ё"){
			newStr += "е";
		}else {
			newStr += str[i]
		}
	}

	function comparison(newStr){
		if(newStr.length < 2){
			return true
		}else if(newStr[0] === newStr[newStr.length - 1]){
			return (comparison(newStr.slice(1, newStr.length-1)))
		}else{
			return false
		}
		}
	return comparison(newStr)
}

alert(isPalindrome(string)?"это палиндром":"это не палиндром")