const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", inputData);

function inputData(event) {
  event.preventDefault();
  console.log(event.currentTarget.value);
  refs.output.textContent = event.currentTarget.value || "Anonymous";
}
