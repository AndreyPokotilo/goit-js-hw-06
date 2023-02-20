// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputRefs = document.querySelector("#validation-input");

function inputHandler(event) {
  const propertyInput = Number(event.currentTarget.dataset.length);
  console.dir(event.currentTarget)
  const valueInput = event.currentTarget.value.length;
  
  if (valueInput === propertyInput) {
    inputRefs.classList.add("valid");
    inputRefs.classList.remove("invalid");
  } else if (valueInput === 0) {
    inputRefs.classList.remove("valid");
    inputRefs.classList.remove("invalid");
  } else if (valueInput !== propertyInput) {
    inputRefs.classList.add("invalid");
    inputRefs.classList.remove("valid");
  }
  console.log("propertyInput", propertyInput);
  console.log("valueInput", valueInput);
}

inputRefs.addEventListener("blur", inputHandler);
