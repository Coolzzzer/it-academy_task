let string = prompt("");
function isPalindrome(str){
	str = str.toLowerCase();
	let start = "";
	let end = "";
	for(let i = 0;i < str.length;i++){
		if(str[i] == " " || str[i] == "ь" || str[i] == "ъ" 
		|| str[i] == "," || str[i] == "." || str[i] == "!" 
		|| str[i] == "?" || str[i] == "%" || str[i] == "№" 
		|| str[i] == ":" || str[i] == ";" || str[i] == "-"){
		} else{
			start += str[i]
		}
	}
		for (let i = start.length - 1; i >= (start.length - 1)/2; i--) {
			if (start[i] !== start[start.length - 1 - i]) {
					return false;
			}
	}
	return true;
}
alert(isPalindrome(string))