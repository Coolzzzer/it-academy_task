function deepComp(value1, value2) {
  if (value1 === value2) {
    return true;
  }

  if (typeof value1 !== typeof value2) {
    return false;
  }

  
	if (!value1 && !value2) {
    return true;
  }else if((typeof value1 !== 'object' || !value1) || (typeof value2 !== 'object' || !value2)){
		return false;
	}

  if (Array.isArray(value1) !== Array.isArray(value2)) {
    return false;
  }

  if (Array.isArray(value1)) {
    if (value1.length !== value2.length) {
      return false;
    } else {
      for(let i = 0; i < value1.length;i++){
				if(deepComp(value1[i], value2[i])){
					return false
				}
			}
    }
  } else {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for(const key of keys1){
			if(!(key in value2)||!deepComp(value1[key],value2[key])){
				return false
			}
		}
  }

  return true;
}

 function test(value1, value2, condition){
	if(deepComp(value1, value2) === condition){
		return console.log(`${value1} и ${value2} - тест прошли`)
	}else{
		return console.log(`${value1} и ${value2}                                        !!!тест не прошли!!!`)
	}

 }
var H1={ a:5, b: { b1:6, b2:7 } };
var H2={ b: { b1:6, b2:7 }, a:5 };
var H3={ a:5, b: { b1:6 } };
var H4={ a:5, b: { b1:66, b2:7 } };
var H5={ a:5, b: { b1:6, b2:7, b3:8 } };
var H6={ a:null, b:undefined, c:Number.NaN };
var H7={ c:Number.NaN, b:undefined, a:null };
var H8={a:5,b:6};
var H9={c:5,d:6};
var H10={a:5};
var A1=[5,7];
var A2=[5,5,7];
var A3=[5,8,7];

test(H1,H2,true)
test(H1,H3, false)
test(H1,H4, false)
test(H1,H5, false)
test(H6,H7,true)
test(H8,H9, false)
test(H8,H10, false)
test(null,H10, false)
test(H10,null, false)
test(null,null,true)
test(null,undefined, false)
test(5,"5", false)
test(5,H1, false)
test(A1,H1, false)
test(A2,A3, false)
test( {a:5,b:undefined}, {a:5,c:undefined}, false )
test([5,7],{0:5,1:7}, false)
test( [5,7],{0:5,1:7,length:2}, false )
test("aaa","bbb", false)
test(Number.NaN,Number.NaN,true)
