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

form1.addEventListener('submit',validateInfoForm,false);

function validateInfoForm(eo){
	eo=eo||window.event;
	try{
		const form1 = document.forms.form1;

		const developersField=form1.elements.developers;
		const developersValue=developersField.value;

		const sitenameField=form1.elements.sitename;
		const sitenameValue=sitenameField.value;

		const siteurlField=form1.elements.siteurl;
		const siteurlValue=siteurlField.value;

		const dateField=form1.elements.date;
		const dateValue=dateField.value;

		const visitorsField=form1.elements.visitors;
		const visitorsValue=parseInt(visitorsField.value.trim());

		const emailField=form1.elements.email;
		const emailValue=emailField.value;

		const divisionField=form1.elements.division;
		const divisionValue=divisionField.value;

		const paymentField=form1.elements.payment;
		const paymentValue=paymentField.value;

		const votesField=form1.elements.votes;
		const votesValue=votesField.checked;

		const descriptionField=form1.elements.description;
		const descriptionValue=descriptionField.value;

		const error0 = document.querySelector("#e0");
		const error1 = document.querySelector("#e1");
		const error2 = document.querySelector("#e2");
		const error3 = document.querySelector("#e3");
		const error4 = document.querySelector("#e4");
		const error5 = document.querySelector("#e5");
		const error6 = document.querySelector("#e6");
		const error7 = document.querySelector("#e7");
		const error8 = document.querySelector("#e8");
		const error9 = document.querySelector("#e9");
		error0.textContent = "";
		error1.textContent = "";
		error2.textContent = "";
		error3.textContent = "";
		error4.textContent = "";
		error5.textContent = "";
		error6.textContent = "";
		error7.textContent = "";
		error8.textContent = "";
		error9.textContent = "";

		function errorOccurs(name,text){
			name.textContent = text;
			developersField.focus();
			eo.preventDefault();
		}
		if (developersValue.length<=0) {
			errorOccurs(error0,'Введите, пожалуйста, данные о разработчиках!');
		}
		if (sitenameValue.length<=0) {
			errorOccurs(error1,'Введите, пожалуйста, название сайта!')
		}
		if (siteurlValue.length<=0) {
			errorOccurs(error2,'Введите, пожалуйста, URL сайта!')
		}
		if (dateValue.length<=0) {
			errorOccurs(error3,'Введите, пожалуйста, дату запуска сайта!')
		}
		if (!visitorsValue) {
			errorOccurs(error4,'Введите, пожалуйста, число посетителей в сутки!')
		}
		if (emailValue.length<=0) {
			errorOccurs(error5,'Введите, пожалуйста, ваш E-mail!')
		}
		if (divisionValue.length<=0) {
			errorOccurs(error6,'Выберите, пожалуйста, рубрику!')
		}
		if (paymentValue==="") {
			errorOccurs(error7,'Укажите, пожалуйста, тип размещения!')
		}
		if (!votesValue) {
			errorOccurs(error8,'Необходимо ваше согласие!')
		}
		if (descriptionValue.length<=0) {
			errorOccurs(error9,'Введите, пожалуйста, описание вашего сайта!')
		}
		
	}
	catch ( ex ) {
		console.log(ex);
		alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
		eo.preventDefault();
	}
}
// { label: 'E-mail для связи:', kind: 'email', name: 'email', error: "e5" },
// { label: 'Рубрика каталога:', kind: 'combo', name: 'division', error: "e6",
// 		variants: [
// 				{ text: 'здоровье', value: 1 },
// 				{ text: 'домашний уют', value: 2 },
// 				{ text: 'бытовая техника', value: 3 }
// 		]
// },
// { label: 'Размещение:', kind: 'radio', name: 'payment', error: "e7",
// 		variants: [
// 				{ text: 'бесплатное', value: 1 },
// 				{ text: 'платное', value: 2 },
// 				{ text: 'VIP', value: 3 }
// 		]
// },
// { label: 'Разрешить отзывы:', kind: 'checkbox', name: 'votes', error: "e8" },
// { label: 'Описание сайта:', kind: 'textarea', name: 'description', error: "e9" },
// { caption: 'Опубликовать', kind: 'submit' }
// ];