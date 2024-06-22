const display = document.querySelector("div");

const input = document.createElement("input");
input.setAttribute("placeholder", "Введите диаметр");
input.setAttribute("type", "number");
const divError = document.createElement("div");
divError.style.color = "red";
const btn = document.createElement("button")
btn.textContent = "Создать"
display.appendChild(input);
display.appendChild(btn);
display.appendChild(divError);


btn.addEventListener("click", buld)


function buld(){
	let size = input.value;
	let startAngle = 30;
	if(!size){
		divError.textContent = "Введите число!!!"
		return input.focus()
	}else if((size < 200) || (size > 800)){
		divError.textContent = "Введите число в диапазоне от 200 до 800 пикселей!!!"
		return input.focus()
	}
	const divClock = document.createElement("div");
	const radius = size/2-size/10;
	display.removeChild(input);
	display.removeChild(btn);
	display.removeChild(divError);
	divClock.style.width = size + "px";
	divClock.style.height = size + "px";
	divClock.style.borderRadius = "50%"
	divClock.style.background = "orange";
	display.appendChild(divClock)
	for(let i = 1;i<=12;i++){
		const divElem = document.createElement("div");
		divElem.textContent = i;
		var angle = startAngle/180*Math.PI;
		var clockCenterX=divClock.offsetLeft+divClock.offsetWidth/2;
		var clockCenterY=divClock.offsetTop+divClock.offsetHeight/2;
		const elemCenterX=clockCenterX-size/20+radius*Math.sin(angle);
		const elemCenterY=clockCenterY-size/20-radius*Math.cos(angle);
		divElem.style.left=Math.round(elemCenterX-divElem.offsetWidth/2)+'px';
		divElem.style.top=Math.round(elemCenterY-divElem.offsetHeight/2)+'px';
		startAngle+=30;
		divElem.style.fontSize = size/20 + "px"
		divElem.style.width = size/10 + "px";
		divElem.style.height = size/10 + "px";
		divElem.style.alignItems = "center";
		divElem.style.justifyContent = "center"
		divElem.style.display = "flex"
		divElem.style.borderRadius = "50%";
		divElem.style.background = "green";
		divElem.style.position = "absolute"
		divClock.appendChild(divElem);
	}
	function createArrows(divArr,width,height,color,zIndex){
		divArr.style.position = "absolute"
		divArr.style.left=clockCenterX-size/width/2 + "px";
		divArr.style.top=clockCenterY + "px";
		divArr.style.width = size/width + "px";
		divArr.style.height = size/height + "px";
		divArr.style.background = color;
		divArr.style.zIndex = zIndex
		divArr.style.borderRadius = "20px"
		divClock.appendChild(divArr);
	}
	const divHour = document.createElement("div");
	const divMinute = document.createElement("div");
	const divSecond = document.createElement("div");
	createArrows(divHour,40,5,"black",3);
	createArrows(divMinute,50,4,"red",2);
	createArrows(divSecond,60,3,"white",1);
	const divWatch = document.createElement("div");
	divWatch.style.width = size/3 + "px";
	divWatch.style.height = size/10 + "px";
	divWatch.style.position = "absolute";
	divWatch.style.left=clockCenterX/1.5 + "px";
	divWatch.style.top=clockCenterY/2 + "px";
	divWatch.style.zIndex = 0
	divWatch.style.alignItems = "center";
	divWatch.style.justifyContent = "center";
	divWatch.style.display = "flex";
	divWatch.style.fontSize = size/20 + "px"
	divClock.appendChild(divWatch);
	
	setInterval(updateTime,1000);
	
	function updateTime() {
		const currTime=new Date();
		divWatch.textContent = formatDateTime(currTime);
		console.log(formatDateTime(currTime));
	}
	function formatDateTime(dt) {
		const hours=dt.getHours();
		const minutes=dt.getMinutes();
		const seconds=dt.getSeconds();
		return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
	}
	function str0l(val,len) {
		let strVal=val.toString();
		while ( strVal.length < len )
				strVal='0'+strVal;
		return strVal;
	}
	const currTime=new Date();
	const startSecond = currTime.getSeconds()-30;
	const startMinute = currTime.getMinutes()-30;
	const startHour = currTime.getHours()-5.5;
	let countSecond = startSecond * (360 / 60);
	let countMinute = (startMinute + startSecond / 60) * (360 / 60);
	let countHour =(startHour + startMinute / 60) * (360 / 12);
start();
function start(){
	divSecond.style.transformOrigin = "0 0";
	divSecond.style.rotate=Math.round(countSecond)+'deg';
	divMinute.style.transformOrigin = "0 0";
	divMinute.style.rotate=Math.round(countMinute)+'deg';
	divHour.style.transformOrigin = "0 0";
	divHour.style.rotate=Math.round(countHour)+'deg';
	countSecond+=6;
	countMinute+=0.1;
	countHour+=0.00166667;
}
	setInterval(start,1000);

}

