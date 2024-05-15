function primeNum(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 2;
}

function printNum(max){
	for(let i = 2; i <= max; i++){
		if (primeNum(i)){
			console.log(i);
		}
	}
}
printNum(1000)