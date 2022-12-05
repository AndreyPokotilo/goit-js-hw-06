const input = document.querySelector("#validation-input");

const addInputHandler = (event) => {
  const onInput = event.currentTarget;
  console.log(onInput.value.length);
  const dataset = Number(onInput.dataset.length);
  console.log(dataset);
  if (onInput.value.length === dataset) {
    onInput.classList.add("valid");
    onInput.classList.remove("invalid");
  } else {
    onInput.classList.remove("valid");
    onInput.classList.add("invalid");
  }
  if (onInput.value === "") {
    input.classList.remove("valid", "invalid");
  }
};

input.addEventListener("blur", addInputHandler);
