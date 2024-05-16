"use strick"
let string = prompt("");

function isPalindrome(str){
	let newStr = "";
	str = str.toLowerCase();
	for(let i = 0;i < str.length;i++){
		if(str[i] !== " " && str[i] !== "ь" && str[i] !== "ъ" 
		&& str[i] !== "," && str[i] !== "." && str[i] !== "!" 
		&& str[i] !== "?" && str[i] !== "%" && str[i] !== "!№" 
		&& str[i] !== ":" && str[i] !== ";" && str[i] !== "-")
		{
		newStr += str[i]
		}
	}
	let start = 0;
	let end = newStr.length - 1;
	function comparison(newStr){
		if(start>=end){
			return true
		}else{
			if(newStr[start] === newStr[end]){
				start++;
				end--;
				return (comparison(newStr)
				)
			}else{
				return false
			}
		}
	}
	return comparison(newStr)
}

alert(isPalindrome(string)?"это палиндром":"это не палиндром")