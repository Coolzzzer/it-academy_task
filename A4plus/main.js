"use strick"
let string = prompt("");
let newStr = "";

function removingUnnecessary(str){
	str = str.toLowerCase();
	for(let i = 0;i < str.length;i++){
		if(str[i] == " " || str[i] == "ь" || str[i] == "ъ" 
		|| str[i] == "," || str[i] == "." || str[i] == "!" 
		|| str[i] == "?" || str[i] == "%" || str[i] == "№" 
		|| str[i] == ":" || str[i] == ";" || str[i] == "-"){
		} else{
			newStr += str[i]
		}
	}
	return newStr
}
removingUnnecessary(string);

let start = 0;
let end = newStr.length - 1;

function isPalindrome(newStr){
	if(start>=end){
		return true
	}else{
		if(newStr[start] === newStr[end]){
			start++;
			end--;
			return (isPalindrome(newStr)
			)
		}else{
			return false
		}
	}
}
alert(isPalindrome(newStr)?"это палиндром":"это не палиндром")