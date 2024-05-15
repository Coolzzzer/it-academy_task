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

function ff(){
	const iddd = 2;
	console.log("before")
	iddd = 123;
	console.log("after")
}
function zsd(){
	asdasd = asdcasd;
}
try{
	ff();	
	zsd();
}
catch(error){
	if (error.name == "ReferenceError"){
		console.log("sdcyuasc " + error.name);
	console.log("sdcyuasc " + error.message);
	} else if (error.name == "TypeError"){
		console.log("s dc yua sc " + error.name);
	console.log("sd cyu asc " + error.message);
	}
	else{
		throw error;
	}
}
finally{
	console.log("end")
}