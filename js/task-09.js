// Напиши скрипт, который изменяет цвета фона элемента <body>
//  через инлайн стиль при клике на button.change-color
//  и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChange = document.querySelector(".change-color");
const elSpan = document.querySelector(".color");

const colorValue = () => {
  elSpan.textContent = getRandomHexColor();
  document.body.setAttribute("style", "background-color:" + elSpan.textContent);
};

btnChange.addEventListener("click", colorValue);
