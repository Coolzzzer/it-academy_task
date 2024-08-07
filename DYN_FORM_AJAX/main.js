const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');

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

function loadFormData(url, formTag) {
  $.ajax(url, {
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      buildForm(formTag, data); 
    },
  });
}

loadFormData('https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json', form1);
loadFormData('https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json', form2);
