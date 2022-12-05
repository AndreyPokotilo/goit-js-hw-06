const counter = document.querySelector('#value')
let counterValue = 0

const btnRemove = document.querySelector('button[data-action="decrement"]')
const btnAdded = document.querySelector('button[data-action="increment"]')


const addedValueEvent = () => {
    console.log('click +')
    counterValue += 1
    counter.textContent = counterValue
    
};

btnAdded.addEventListener('click', addedValueEvent);

const removeValueEvent = () => {
    console.log('click -')
    counterValue -= 1
    counter.textContent = counterValue
    
};

btnRemove.addEventListener('click', removeValueEvent);

