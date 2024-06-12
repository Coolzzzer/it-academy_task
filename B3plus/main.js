function calculator(input){
	let result = "";
	let operators = ["+", "-", "*", "/"];
	let string = "";
	for( let i = 0; i < input.length; i++){
		if(operators.includes(input[i])){
			string += " " + input[i] + " "
		}else if(input[i] === " "){
		}
		else{
			string += input[i];
		}
	}
	let arr = string.split(" ")
	function hyperOperation(){
		for(let i = 0; i < arr.length;i++){
			if(arr[i] == "*"){
				arr[i] = +arr[i-1] * +arr[i+1];
				arr.splice(i-1,1);
				arr.splice(i,1);
				return hyperOperation();
			}else if(arr[i] == "/"){
				arr[i] = +arr[i-1] / +arr[i+1];
				arr.splice(i-1,1);
				arr.splice(i,1);
				return hyperOperation(arr);
			}
		}
	}
	function elementaryOperation(){
		for(let i = 0; i < arr.length;i++){
			if(arr[i] == "+"){
				arr[i] = +arr[i-1] + +arr[i+1];
				arr.splice(i-1,1);
				arr.splice(i,1);
				return elementaryOperation();
			}else if(arr[i] == "-"){
				arr[i] = +arr[i-1] - +arr[i+1];
				arr.splice(i-1,1);
				arr.splice(i,1);
				return elementaryOperation(arr);
			}
		}
	}
	hyperOperation();
	elementaryOperation();
	if(!operators.includes(arr)){
		return result += arr	
	}
}
console.log(calculator((" 2+2*3 /2 -9")))
console.log(calculator((" 11- 4 + 5 *2")))
console.log(calculator((" 11*4 /4 -12")))
console.log(calculator((" -10  /3")))