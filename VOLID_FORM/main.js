const form1 = document.querySelector("#form1");

const formDef1 = [
	{ label: 'Разработчики:', kind: 'text', name: 'developers', error: "e0" },
	{ label: 'Название сайта:', kind: 'text', name: 'sitename', error: "e1" },
	{ label: 'URL сайта:', kind: 'text', name: 'siteurl', error: "e2" },
	{ label: 'Дата запуска сайта:', kind: 'date', name: 'date', error: "e3" },
	{ label: 'Посетителей в сутки:', kind: 'number', name: 'visitors', error: "e4" },
	{ label: 'E-mail для связи:', kind: 'email', name: 'email', error: "e5" },
	{ label: 'Рубрика каталога:', kind: 'combo', name: 'division', error: "e6",
			variants: [
					{ text: 'выбрать', value: 0 },
					{ text: 'здоровье', value: 1 },
					{ text: 'домашний уют', value: 2 },
					{ text: 'бытовая техника', value: 3 }
			]
	},
	{ label: 'Размещение:', kind: 'radio', name: 'payment', error: "e7",
			variants: [
					{ text: 'бесплатное', value: 1 },
					{ text: 'платное', value: 2 },
					{ text: 'VIP', value: 3 }
			]
	},
	{ label: 'Разрешить отзывы:', kind: 'checkbox', name: 'votes', error: "e8" },
	{ label: 'Описание сайта:', kind: 'textarea', name: 'description', error: "e9" },
	{ caption: 'Опубликовать', kind: 'submit' }
];

function buildForm(formTag, formData) {
  const form = document.createElement("form");
  form.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
  form.setAttribute("method", "POST");
	form.setAttribute("name", "form1");
  formTag.appendChild(form);

  formData.forEach(element => {
    if (element.kind === "submit") {
      const submit = document.createElement("input");
      submit.setAttribute("type", "submit");
			submit.setAttribute("name", "submit");
      submit.setAttribute("value", element.caption);
      form.appendChild(submit);
      form.appendChild(document.createElement('br'));
    } else {
      const label = document.createElement("label");
      label.textContent = element.label;
			const error = document.createElement("label");
			error.style.color = "red";
      if (element.kind === "combo") {
        const select = document.createElement("select");
        select.setAttribute("name", element.name);
        element.variants.forEach(variant => {
          const option = document.createElement("option");
          option.text = variant.text;
          option.value = variant.value;
          select.appendChild(option);
        });
        form.appendChild(label);
        form.appendChild(select);
				error.setAttribute("id", element.error);
				form.appendChild(error);
      } else if (element.kind === "radio") {
        const radioSpan = document.createElement("span");
        element.variants.forEach(variant => {
          const radio = document.createElement("input");
          radio.setAttribute("type", "radio");
          radio.setAttribute("name", element.name); 
          radio.setAttribute("value", variant.value);
          const radioLabel = document.createElement("label");
          radioLabel.textContent = variant.text;
          radioSpan.appendChild(radio);
          radioSpan.appendChild(radioLabel);
        });
        form.appendChild(label);
        form.appendChild(radioSpan);
				error.setAttribute("id", element.error);
				form.appendChild(error);
      }else if (element.kind === "date") {
        const input = document.createElement("input");
        input.setAttribute("type", element.kind);
        input.setAttribute("name", element.name);
        form.appendChild(label);
        form.appendChild(input);
				error.setAttribute("id", element.error);
				form.appendChild(error);
      } else {
        const input = document.createElement("input");
        input.setAttribute("type", element.kind);
        input.setAttribute("name", element.name);
        form.appendChild(label);
        form.appendChild(input);
				error.setAttribute("id", element.error);
				form.appendChild(error);
      }
      form.appendChild(document.createElement('br'));
    }
  });
  form.appendChild(document.createElement('br'));
}
buildForm(form1, formDef1);
const form = document.forms.form1;
let validateCheck = [];

const developersField=form.elements.developers;
developersField.addEventListener('focusout',function(event) {
	validateInfoForm(developersField, "#e0",'Введите, пожалуйста, данные о разработчиках!',"0", event);
}, false)
const sitenameField=form.elements.sitename;
sitenameField.addEventListener('focusout',function(event) {
	validateInfoForm(sitenameField, "#e1",'Введите, пожалуйста, название сайта!',"1", event);
}, false)
const siteurlField=form.elements.siteurl;
siteurlField.addEventListener('focusout',function(event) {
	validateInfoForm(siteurlField, "#e2",'Введите, пожалуйста, URL сайта!',"2", event);
}, false)
const dateField=form.elements.date;
dateField.addEventListener('focusout',function(event) {
	validateInfoForm(dateField, "#e3",'Введите, пожалуйста, дату запуска сайта!',"3", event);
}, false)
const visitorsField=form.elements.visitors;
visitorsField.addEventListener('focusout',function(event) {
	validateNum(visitorsField,"#e4",'Введите, пожалуйста, число посетителей в сутки!',"4",event);
}, false)
const emailField=form.elements.email;
emailField.addEventListener('focusout',function(event) {
	validateInfoForm(emailField, "#e5",'Введите, пожалуйста, ваш E-mail!',"5", event);
}, false)
const divisionField=form.elements.division;
divisionField.addEventListener('focusout',function(event) {
	validateNum(divisionField, "#e6",'Выберите, пожалуйста, рубрику!',"6", event);
}, false)

const paymentField=form.elements.payment;

const votesField=form.elements.votes;
votesField.addEventListener('focusout',function(event) {
	validateVotes(votesField, "#e8",'Необходимо ваше согласие!',"8", event);
}, false)
const descriptionField=form.elements.description;
descriptionField.addEventListener('focusout',function(event) {
	validateInfoForm(descriptionField, "#e9",'Введите, пожалуйста, описание вашего сайта!',"9", event);
}, false)



function validateInfoForm(field,id,errorText,symbol,event){
	event = event || window.event
	const value=field.value;
	const error = document.querySelector(id);
	if (value.length<=0) {
		if(validateCheck.includes(symbol)){
			validateCheck = validateCheck.filter(item => item !== symbol);
		}
		error.textContent = errorText;
	}else{
		if(!validateCheck.includes(symbol)){
			validateCheck.push(symbol);
		}
		error.textContent = "";
	}
}
function validateNum(field,id,errorText,symbol,event){
	event = event || window.event
	const value=parseInt(field.value.trim());
	const error = document.querySelector(id);
	if (!value) {
		if(validateCheck.includes(symbol)){
			validateCheck = validateCheck.filter(item => item !== symbol);
		}
		error.textContent = errorText;
	}else{
		if(!validateCheck.includes(symbol)){
			validateCheck.push(symbol);
		}
		error.textContent = "";
	}
}
function validateVotes(field,id,errorText,symbol,event){
	event = event || window.event
	const error = document.querySelector(id);
	if (!field.checked) {
		if(validateCheck.includes(symbol)){
			validateCheck = validateCheck.filter(item => item !== symbol);
		}
		error.textContent = errorText;
	}else{
		if(!validateCheck.includes(symbol)){
			validateCheck.push(symbol);
		}
		error.textContent = "";
	}
}

const submit=form.elements.submit;

submit.addEventListener("click",function(event){
	event = event || window.event;
	try{
		let validateSymbol = "0123456789";
		let validateTest = validateCheck.sort().join("");;
		if(validateTest != validateSymbol){
			event.preventDefault();
			validateInfoForm(developersField, "#e0",'Введите, пожалуйста, данные о разработчиках!',"0", event);
			validateInfoForm(sitenameField, "#e1",'Введите, пожалуйста, название сайта!',"1", event);
			validateInfoForm(siteurlField, "#e2",'Введите, пожалуйста, URL сайта!',"2", event);
			validateInfoForm(dateField, "#e3",'Введите, пожалуйста, дату запуска сайта!',"3", event);
			validateNum(visitorsField,"#e4",'Введите, пожалуйста, число посетителей в сутки!',"4",event);
			validateInfoForm(emailField, "#e5",'Введите, пожалуйста, ваш E-mail!',"5", event);
			validateNum(divisionField, "#e6",'Выберите, пожалуйста, рубрику!',"6", event);
			validateNum(paymentField, "#e7",'Укажите, пожалуйста, тип размещения!',"7", event);
			validateVotes(votesField, "#e8",'Необходимо ваше согласие!',"8", event)
			validateInfoForm(descriptionField, "#e9",'Введите, пожалуйста, описание вашего сайта!',"9", event);
		}
	}catch(ex){
		console.log(ex);
		alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
		event.preventDefault()
	}
},false)
