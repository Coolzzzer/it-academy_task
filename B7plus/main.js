function formatNumber(num, format){
	let result = "";
	if(format.includes(".")){
		let searchPoint = format.length-1 - format.lastIndexOf(".");
		let str = ""
		for(let i = 0; i<searchPoint-1;i++){
			str+="0"
		}
		let roundingUp = `0.${str}1`
		num = (Math.round(num/(+roundingUp))*(+roundingUp)).toFixed(searchPoint).toString().replace(".","")
	}else{
		num = Math.round(num).toFixed(0)
	}
	if(num.length>=format.length){
		let str = num.length-format.length+1
		for(let i=0;i<=str;i++){
			format = "#" + format
		}
	}
	let numIndex = num.length-1;
	for(let i = format.length-1; i>=0;i--){
		if(format[i] === "#"){
			if(numIndex >= 0){
				result = num[numIndex] + result;
				numIndex--;
			}else{
				result = " " + result
			}
		}else if(format[i] === " ") {
			result = " " + result;
		}else if(format[i] === "."){
			result = "." + result;
		}
	}

	return result;
}

console.log(formatNumber(2.3,"# ### ###.##") )
console.log(formatNumber(12345.368,"# ### ###.##"))
console.log(formatNumber(123456789.3685,"# ### ##.####"))
console.log(formatNumber(123456789,"## ## ##"))