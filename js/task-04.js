// СчетчикСчетчик состоит из спана и кнопок, которые, при клике, 
// должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const spanVal = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const decrement = () => {
   counterValue -= 1;
   spanVal.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    spanVal.textContent = counterValue;
}

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)
