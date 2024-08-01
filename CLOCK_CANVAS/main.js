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
	const radius = size/2 -size/10;
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

	var clockCenterX=size/2;
	var clockCenterY=size/2;
	const cvs=document.createElement('canvas');
	display.appendChild(cvs);
	
	function start(){
		const circle=cvs.getContext('2d');

		cvs.width = size;
		cvs.height = size;
		
		circle.fillStyle='orange';
		circle.beginPath();
		circle.arc(clockCenterX,clockCenterY, size/2, 0,Math.PI*2, false);
		circle.fill();

		const cvsText = cvs.getContext('2d');
		cvsText.font=`italic bold ${size/15}px Arial`;
		cvsText.fill();
		for(let i = 1;i<=12;i++){
			var angle = startAngle/180*Math.PI;
			const elemCenterX=clockCenterX-size/20+radius*Math.sin(angle);
			const elemCenterY=clockCenterY-size/20-radius*Math.cos(angle);
			const x = Math.round(elemCenterX-clockCenterX);
			const y = Math.round(elemCenterY-clockCenterX);

			const circleElem = cvs.getContext('2d');
			circleElem.beginPath();
			circleElem.fillStyle = 'green'
			circleElem.arc(x + clockCenterX + size/20, y + clockCenterY + size/20, size/15, 0,Math.PI*2, false);
			circleElem.fill();

			const text=cvs.getContext('2d');
			text.fillStyle='red';
			text.font=`italic bold ${size/15}px Arial`;
			let t;
			i>=10 ? t = size/80: t = size/35
			text.fillText(i,x + clockCenterX + t, y + clockCenterY + size/14);
			startAngle+=30;
		}

		const currTime=new Date();

		const seconds = currTime.getSeconds();
		const angleSecond = (seconds / 60) * (2 * Math.PI);
		const x2Second = clockCenterX + radius * Math.cos(angleSecond - Math.PI / 2);
		const y2Second = clockCenterY + radius * Math.sin(angleSecond - Math.PI / 2);
		const cvsSecond = cvs.getContext('2d');
		cvsSecond.strokeStyle='white';
		cvsSecond.lineWidth=size/45;
		cvsSecond.lineCap='round';
		cvsSecond.beginPath();
		cvsSecond.moveTo(clockCenterX,clockCenterY);
		cvsSecond.lineTo(x2Second,y2Second);
		cvsSecond.stroke();
		
		const minutes = currTime.getMinutes();
		const angleMinute = (minutes / 60) * (2 * Math.PI) + (seconds / 60) * (Math.PI / 30);
		const x2Minute = clockCenterX + radius/1.25 * Math.cos(angleMinute - Math.PI / 2);
		const y2Minute = clockCenterY + radius/1.25 * Math.sin(angleMinute - Math.PI / 2);
		
		const cvsMinute = cvs.getContext('2d');
		cvsMinute.strokeStyle='blue';
		cvsMinute.lineWidth=size/35;
		cvsMinute.lineCap='round';
		cvsMinute.beginPath();
		cvsMinute.moveTo(clockCenterX,clockCenterY);
		cvsMinute.lineTo(x2Minute,y2Minute);
		cvsMinute.stroke();

		const hours = currTime.getHours();
		const angleHour = (hours / 12) * (2 * Math.PI) + (minutes / 60) * (Math.PI / 6);
		const x2Hour = clockCenterX + radius/1.5 * Math.cos(angleHour - Math.PI / 2);
		const y2Hour = clockCenterY + radius/1.5 * Math.sin(angleHour - Math.PI / 2);

		const cvsHour = cvs.getContext('2d');
		cvsHour.strokeStyle='black';
		cvsHour.lineWidth=size/25;
		cvsHour.lineCap='round';
		cvsHour.beginPath();
		cvsHour.moveTo(clockCenterX,clockCenterY);
		cvsHour.lineTo(x2Hour,y2Hour);
		cvsHour.stroke();
		

		const fullTime = `${hours}:${minutes}:${seconds>=10?seconds:`0${seconds}`}`;
		cvsText.fillText(fullTime,clockCenterX-size/10 , clockCenterY-size/5);
		console.log(fullTime)
	}
	setInterval(start,1000);
}