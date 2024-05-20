const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');

const formDef1 = [
	{ label: 'Название сайта:', kind: 'text', name: 'sitename' },
	{ label: 'URL сайта:', kind: 'text', name: 'siteurl' },
	{ label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
	{ label: 'E-mail для связи:', kind: 'email', name: 'email' },
	{ label: 'Рубрика каталога:', kind: 'combo', name: 'division',
			variants: [
					{ text: 'здоровье', value: 1 },
					{ text: 'домашний уют', value: 2 },
					{ text: 'бытовая техника', value: 3 }
			]
	},
	{ label: 'Размещение:', kind: 'radio', name: 'payment',
			variants: [
					{ text: 'бесплатное', value: 1 },
					{ text: 'платное', value: 2 },
					{ text: 'VIP', value: 3 }
			]
	},
	{ label: 'Разрешить отзывы:', kind: 'checkbox', name: 'votes' },
	{ label: 'Описание сайта:', kind: 'textarea', name: 'description' },
	{ caption: 'Опубликовать', kind: 'submit' }
];
const formDef2 = [
	{ label: 'Фамилия:', kind: 'text', name: 'lastname' },
	{ label: 'Имя:', kind: 'text', name: 'firstname' },
	{ label: 'Отчество:', kind: 'text', name: 'secondname' },
	{ label: 'Возраст:', kind: 'number', name: 'age' },
	{ caption: 'Зарегистрироваться', kind: 'submit' }
];

function buildForm(formTag, formData) {
  const form = document.createElement("form");
  form.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
  form.setAttribute("method", "POST");
  formTag.appendChild(form);

  formData.forEach(element => {
    if (element.kind === "submit") {
      const submit = document.createElement("input");
      submit.setAttribute("type", "submit");
      submit.setAttribute("value", element.caption);
      form.appendChild(submit);
      form.appendChild(document.createElement('br'));
    } else {
      const label = document.createElement("label");
      label.textContent = element.label;

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
      } else {
        const input = document.createElement("input");
        input.setAttribute("type", element.kind);
        input.setAttribute("id", element.name);
        form.appendChild(label);
        form.appendChild(input);
      }
      form.appendChild(document.createElement('br'));
    }
  });

  form.appendChild(document.createElement('br'));
}
buildForm(form1, formDef1);
buildForm(form2, formDef2)