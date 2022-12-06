// Напиши скрипт управления формой логина.

// 1 Обработка отправки формы form.login-form должна быть по событию submit.
// 2 При отправке формы страница не должна перезагружаться.
// 3 Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// 4 Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// 5 Выведи обьект с введенными данными в консоль и очисти значения полей формы
//  методом reset.

const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  const {elements: { email, password }} = event.currentTarget;

  event.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("Bсе поля должны быть заполнены!");
    return;
  }
  console.log({email: email.value, password: password.value});
  form.reset();
};

form.addEventListener("submit", onFormSubmit);
