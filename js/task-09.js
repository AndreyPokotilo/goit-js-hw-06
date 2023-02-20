// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при 
// клике на button.change-color и выводит значение цвета в span.color.

const spanRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');
btnRef.addEventListener('click', backgroungColorHandler)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function backgroungColorHandler(event) {
event.preventDefault();
const hexColor = getRandomHexColor();
const bodyRef = document.body;
bodyRef.style.backgroundColor = hexColor;
spanRef.textContent = hexColor;
console.log(hexColor);
};