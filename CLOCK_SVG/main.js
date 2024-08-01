const input = document.createElement("input");
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
	const radius = size/2-size/10;
	if(!size){
		divError.textContent = "Введите число!!!"
		return input.focus()
	}else if((size < 200) || (size > 800)){
		divError.textContent = "Введите число в диапазоне от 200 до 800 пикселей!!!"
		return input.focus()
	}
	display.removeChild(input);
	display.removeChild(btn);
	display.removeChild(divError);
	const SVGNS="http://www.w3.org/2000/svg";
	const SVGElem=document.createElementNS(SVGNS,'svg');
	SVGElem.setAttribute("width", size);
	SVGElem.setAttribute("height", size);
	const circle=document.createElementNS(SVGNS,'ellipse');
	circle.setAttribute("fill","orange");
	circle.setAttribute("rx",size/2);
	circle.setAttribute("ry",size/2);
	circle.setAttribute("cx",size/2);
	circle.setAttribute("cy",size/2);
	SVGElem.appendChild(circle);
	display.appendChild(SVGElem);
	for(let i = 1;i<=12;i++){
		const circleElem=document.createElementNS(SVGNS,'ellipse');
		var angle = startAngle/180*Math.PI;
		var clockCenterX=size/2;
		var clockCenterY=size/2;
		const elemCenterX=clockCenterX-size/20+radius*Math.sin(angle);
		const elemCenterY=clockCenterY-size/20-radius*Math.cos(angle);
		const x = Math.round(elemCenterX-clockCenterX);
		const y = Math.round(elemCenterY-clockCenterX);
		circleElem.setAttribute("rx",size/15);
		circleElem.setAttribute("ry",size/15);
		circleElem.setAttribute("cx",x+size/1.81);
		circleElem.setAttribute("cy",y+size/1.81);
		circleElem.setAttribute("fill","green");
		SVGElem.appendChild(circleElem);
		startAngle+=30;
		const txt=document.createElementNS(SVGNS,'text');
		if(i<10){
			txt.setAttribute("x",x+size/1.85);
		}else {
			txt.setAttribute("x",x+size/1.9);
		}
		txt.setAttribute("y",y+size/1.75);
		txt.style.fill="black";
		txt.style.fontSize = size/20
		txt.textContent=i;
		SVGElem.appendChild(txt);
	}

	function createArrows(svgArr,color,height, width){
		svgArr.setAttribute("x1",clockCenterX);
		svgArr.setAttribute("x2",clockCenterX);
		svgArr.setAttribute("y1",clockCenterY);
		svgArr.setAttribute("y2",height);
		svgArr.setAttribute("stroke", color);
		svgArr.setAttribute("stroke-width", width);
		SVGElem.appendChild(svgArr);
	}
	const svgHour = document.createElementNS(SVGNS,'line');
	const svgMinute = document.createElementNS(SVGNS,'line');
	const svgSecond = document.createElementNS(SVGNS,'line');
	const svgText = document.createElementNS(SVGNS,'text');
	createArrows(svgHour,"black",radius/2,size/30);
	createArrows(svgMinute,"red",radius/2.5,size/40);
	createArrows(svgSecond,"white",radius/3,size/60);
	svgText.setAttribute("x",clockCenterX/1.3);
	svgText.setAttribute("y",clockCenterY/1.7);
	svgText.style.fontSize = size/15;
	svgText.style.fill = "white";
	
	SVGElem.appendChild(svgText);
	start();
	function start(){
		const currTime=new Date();

		const seconds = currTime.getSeconds();
    const angleSecond = (seconds / 60) * (2 * Math.PI);
		const x2Second = clockCenterX + radius * Math.cos(angleSecond - Math.PI / 2);
    const y2Second = clockCenterY + radius * Math.sin(angleSecond - Math.PI / 2);
		svgSecond.setAttribute("x2",x2Second);
		svgSecond.setAttribute("y2",y2Second);

		const minutes = currTime.getMinutes();
		const angleMinute = (minutes / 60) * (2 * Math.PI) + (seconds / 60) * (Math.PI / 30);
		const x2Minute = clockCenterX + radius/1.25 * Math.cos(angleMinute - Math.PI / 2);
		const y2Minute = clockCenterY + radius/1.25 * Math.sin(angleMinute - Math.PI / 2);
		svgMinute.setAttribute("x2", x2Minute);
		svgMinute.setAttribute("y2", y2Minute);

		const hours = currTime.getHours();
		const angleHour = (hours / 12) * (2 * Math.PI) + (minutes / 60) * (Math.PI / 6);
		const x2Hour = clockCenterX + radius/1.5 * Math.cos(angleHour - Math.PI / 2);
		const y2Hour = clockCenterY + radius/1.5 * Math.sin(angleHour - Math.PI / 2);
		svgHour.setAttribute("x2", x2Hour);
		svgHour.setAttribute("y2", y2Hour);
		const fullTime = `${hours}:${minutes}:${seconds>=10?seconds:`0${seconds}`}`
		svgText.textContent = fullTime;
		console.log(fullTime)
	}
	setInterval(start,1000);
}
