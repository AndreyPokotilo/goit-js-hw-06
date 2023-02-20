// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка
// будет меняться размер текста.

const inputControlRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

inputControlRef.addEventListener('input', inputHandler);

function inputHandler(event) {
console.log(event.currentTarget.value, 'px');
const fontSize = event.currentTarget.value;
spanTextRef.style.fontSize = `${fontSize}` + 'px';
}