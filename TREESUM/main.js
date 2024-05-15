
let array = [ 5, 7,
	[ 4, [2], 8, [1,3], 2 ],
	[ 9, [] ],
	1, 8 ];

function treeSum(arr){
	let result = 0;
	for(let i = 0;i < arr.length; i++){
		const sum = arr[i]
		if(Array.isArray(sum)){
			result += treeSum(sum);
		}else if(typeof(sum) === "number"){
			result += sum;
		}
	}
	return result;
}
console.log(treeSum(array)); 