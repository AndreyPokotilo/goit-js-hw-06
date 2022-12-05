//<input id="font-size-control" type="range" min="16" max="96" />
//<br />
//<span id="text">Abracadabra!</span>
//Напиши скрипт, который реагирует на изменение значения
//input#font-size-control (событие input)
//и изменяет инлайн-стиль span#text обновляя свойство font-size.
//В результате при перетаскивании ползунка будет меняться размер текста.
const refs = {
  fontControl: document.querySelector("#font-size-control"),
  textTitel: document.querySelector("#text"),
};

const inputHandler = () => {
  refs.textTitel.style.fontSize = refs.fontControl.value + "px";
};

refs.fontControl.addEventListener("input", inputHandler);
