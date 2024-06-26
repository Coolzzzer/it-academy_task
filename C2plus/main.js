const display = document.querySelector("#display");

var h1={ a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN };
var h2=deepCopy(h1);

var a1=[ 5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];
var a2=deepCopy(a1);

var v1="sss";
var v2=deepCopy(v1);

var z1=null;
var z2=deepCopy(z1);

var n1=Number.NaN;
var n2=deepCopy(n1);

function deepCopy(input){
	if(typeof input !== "object" || input === null){
		return input
	}
	let copy;
	if(Array.isArray(input)){
		copy = [];
		input.forEach(element => {
			copy.push(deepCopy(element))
		});
	}else if(typeof input === "object"){
		copy = {};
	for(let key in input){
			copy[key] = deepCopy(input[key])
		}
	}
	return copy;		 
}
function run(){
	let passed = 0;
	let failed = 0;
	function test(condition, name, result){
		if(condition === result){
			passed++;
			display.innerHTML += (`<br> ${name} - прошел `)
		}else{
			failed++;
			display.innerHTML += (`<br> ${name} - НЕ ПРОШЕЛ!`)
		}
	}
	test(h1===h2, "h1===h2 будет false", false)
	test(h1.a===h2.a, "h1.a===h2.a будет true", true)
	test(h1.b===h2.b, "h1.b===h2.b будет false", false)
	test(h1.b.b1===h2.b.b1, "h1.b.b1===h2.b.b1 будет true", true)
	test(h1.c===h2.c, "h1.c===h2.c будет false", false)
	test(h1.c[0]===h2.c[0], "h1.c[0]===h2.c[0] будет true", true)
	test(h1.d===h2.d, "h1.d===h2.d будет true", true)
	test(h1.e===h2.e, "h1.e===h2.e будет true", true)
	test(isNaN(h2.f), "isNaN(h2.f) будет true)", true)
	test(h2.c instanceof Array, "h2.c instanceof Array будет true", true)

	display.innerHTML += `<br>`;

	test(a1===a2, "a1===a2 будет false", false)
	test(typeof(a2)===typeof(a1), "typeof(a2)===typeof(a1) будет true", true)
	test(a1[0]===a2[0], "a1[0]===a2[0] будет true", true)
	test(a1[1]===a2[1], "a1[1]===a2[1] будет false", false)
	test(a1[1].b1===a2[1].b1, "a1[1].b1===a2[1].b1 будет true", true)
	test(a1[2]===a2[2], "a1[2]===a2[2] будет false", false)
	test(a1[2][0]===a2[2][0], "a1[2][0]===a2[2][0] будет true", true)
	test(a1[3]===a2[3], "a1[3]===a2[3] будет true", true)
	test(a1[4]===a2[4], "a1[4]===a2[4] будет true", true)
	test(isNaN(a2[5]), "isNaN(a2[5]) будет true", true);
	test(a2[2] instanceof Array, "a2[2] instanceof Array будет true", true)

	display.innerHTML += `<br>`;

	test(typeof(v2)===typeof(v1), "typeof(v2)===typeof(v1) будет true", true)
	test(v1===v2, "v1===v2 будет true", true)

	display.innerHTML += `<br>`;

	test(typeof(z2)===typeof(z1), "typeof(z2)===typeof(z1) будет true", true)
	test(z1===z2, "z1===z2 будет true", true)

	display.innerHTML += `<br>`;

	test(typeof(n2)===typeof(n1), "typeof(n2)===typeof(n1) будет true", true)
	test(isNaN(n2), "isNaN(n2) будет true", true)
	
	return display.innerHTML += (`<br><br> Тестов пройдено - ${passed}, тестов не пройдено - ${failed} `);
}