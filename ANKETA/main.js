

(function(){
	"use strick"
let firstName=prompt("Введите ваше имя"); 
for (;;){
	if(!firstName){
		firstName=prompt("Введите ваше имя корректнее");
	}else{
		break
	}
}
let lastName=prompt("Введите вашу фамилию"); 
for (;;){
	if(!lastName){
		lastName=prompt("Введите вашу фамилию корректнее");
	}else{
		break
	}
}
let fatherhood=prompt("Введите ваше отечество");
for (;;){
	if(!fatherhood){
		fatherhood=prompt("Введите ваше отечество корректнее");
	}else{
		break
	}
} 
let age=prompt("Введите ваш возраст"); 
Number(age);
for (;;){
	if (!age || isNaN(age)){
		age=prompt("Введите ваш возраст корректнее и цифрами");
		Number(age);
	}else{
		break
	}
}
let gender=confirm("ваш пол - мужской?");
let pension="";

function checkGender(){
	if
	(gender===true){
		gender="мужской"
	}else if(gender===false){
		gender="женский"
	}
};


function checkPension(){
	checkGender();
	if (gender==="мужской"&&age>=63){
		pension = "да"
	}else if(gender==="мужской"&&age<63){
		pension = "нет"
	}else if(gender==="женский"&&age>=58){
		pension = "да"
	}else if(gender==="женский"&&age<58){
		pension = "нет"
	}
}
checkPension()
alert(` ваше ФИО: ${lastName}, ${firstName}, ${fatherhood} \n ваш возраст в годах: ${age} \n ваш возраст в днях: ${age*365} \n через 5 лет вам будет: ${+age+5} \n ваш пол: ${gender} \n вы на пенсии: ${pension}`)
})()