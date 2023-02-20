const inputRefs = document.querySelector('#name-input');
const spanRefs = document.querySelector('#name-output');

const inputHandler = (evet) => {
console.log(evet.currentTarget.value);
spanRefs.textContent = evet.currentTarget.value;
if(evet.currentTarget.value === '') {
    spanRefs.textContent = "Anonymous";
};
}

inputRefs.addEventListener('input', inputHandler)

