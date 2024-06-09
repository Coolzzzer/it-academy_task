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

const developersField=form.elements.developers;
developersField.addEventListener('focusout',function(event) {
	validateInfoForm(developersField, "#e0",'Введите данные о разработчиках!', event);
}, false)
const sitenameField=form.elements.sitename;
sitenameField.addEventListener('focusout',function(event) {
	validateInfoForm(sitenameField, "#e1",'Введите название сайта!', event);
}, false)
const siteurlField=form.elements.siteurl;
siteurlField.addEventListener('focusout',function(event) {
	validateInfoForm(siteurlField, "#e2",'Введите URL сайта!', event);
}, false)
const dateField=form.elements.date;
dateField.addEventListener('focusout',function(event) {
	validateInfoForm(dateField, "#e3",'Введите дату запуска сайта!', event);
}, false)
const visitorsField=form.elements.visitors;
visitorsField.addEventListener('focusout',function(event) {
	validateNum(visitorsField,"#e4",'Введите число посетителей в сутки!',event);
}, false)
const emailField=form.elements.email;
emailField.addEventListener('focusout',function(event) {
	validateInfoForm(emailField, "#e5",'Введите ваш E-mail!', event);
}, false)
const divisionField=form.elements.division;
divisionField.addEventListener('change',function(event) {
	validateNum(divisionField, "#e6",'Выберите рубрику!', event);
}, false)

const paymentField=form.elements.payment;
paymentField.forEach(radio => {
  radio.addEventListener('change', function(event) {
		event = event || window.event
    const isValid = Array.from(paymentField).some(radio => radio.checked);
		const error = document.querySelector("#e7");
    if (!isValid) {
			error.textContent = 'Выберите тип размещения!';
			return false;
    } else {
			error.textContent = "";
			return true;
    }
  });
});

const votesField=form.elements.votes;
votesField.addEventListener('change',function(event) {
	validateVotes(votesField, "#e8",'Необходимо ваше согласие!', event);
}, false)
const descriptionField=form.elements.description;
descriptionField.addEventListener('focusout',function(event) {
	validateInfoForm(descriptionField, "#e9",'Введите описание вашего сайта!', event);
}, false)



function validateInfoForm(field,id,errorText,eo){
	eo = eo || window.event
	const value=field.value;
	const error = document.querySelector(id);
	if (value.length<=0) {
		error.textContent = errorText;
		return false;
	}else{
		error.textContent = "";
		return true;
	}
}
function validateNum(field,id,errorText,eo){
	eo = eo || window.event
	const value=parseInt(field.value.trim());
	const error = document.querySelector(id);
	if (!value) {
		error.textContent = errorText;
		return false;
	}else{

		error.textContent = "";
		return true;
	}
}
function validateVotes(field,id,errorText,eo){
	eo = eo || window.event
	const error = document.querySelector(id);
	if (!field.checked) {
		error.textContent = errorText;
		return false;
	}else{
		error.textContent = "";
		return true;
	}
}

const submit=form.elements.submit;

submit.addEventListener("click",function(eo){
	eo = eo || window.event;
	try{
		let validateTest = 0;
		validateInfoForm(descriptionField, "#e9",'Введите описание вашего сайта!', eo)? validateTest++:descriptionField.focus();
		validateVotes(votesField, "#e8",'Необходимо ваше согласие!', eo)? validateTest++:votesField.focus();
		validateNum(paymentField, "#e7",'Выберите тип размещения!', eo)? validateTest++:votesField.focus();
		validateNum(divisionField, "#e6",'Выберите рубрику!', eo)? validateTest++:divisionField.focus();
		validateInfoForm(emailField, "#e5",'Введите ваш E-mail!', eo)? validateTest++:emailField.focus();
		validateNum(visitorsField,"#e4",'Введите число посетителей в сутки!',eo)? validateTest++:visitorsField.focus();
		validateInfoForm(dateField, "#e3",'Введите дату запуска сайта!', eo)? validateTest++:dateField.focus();
		validateInfoForm(siteurlField, "#e2",'Введите URL сайта!', eo)? validateTest++:siteurlField.focus();
		validateInfoForm(sitenameField, "#e1",'Введите, название сайта!', eo)? validateTest++:sitenameField.focus();
		validateInfoForm(developersField, "#e0",'Введите данные о разработчиках!', eo)? validateTest++:developersField.focus();
		if(validateTest < 10 ){
			eo.preventDefault();
		}
	}catch(ex){
		console.log(ex);
		alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
		eo.preventDefault()
	}
},false)
