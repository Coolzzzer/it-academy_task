"use strick"
let string = prompt("");

function isPalindrome(str){
	let newStr = "";
	str = str.toLowerCase();
	for(let i = 0;i < str.length;i++){
		if(str[i] == "ё"){
			return newStr += "e";
		}else if(
			 str[i] !== " " && str[i] !== "ь" && str[i] !== "ъ" 
		&& str[i] !== "," && str[i] !== "." && str[i] !== "!" 
		&& str[i] !== "?" && str[i] !== "%" && str[i] !== "№" 
		&& str[i] !== ":" && str[i] !== ";" && str[i] !== "-"){
		newStr += str[i]
		} 
	}
	function comparison(newStr, start, end){
		if(start>=end){
			return true
		}else{
			if(newStr[start] === newStr[end]){
				return (comparison(newStr, start++,end--)
				)
			}else{
				return false
			}
		}
	}
	return comparison(newStr, 0, newStr.length - 1)
}

alert(isPalindrome(string)?"это палиндром":"это не палиндром")