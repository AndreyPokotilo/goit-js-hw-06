const categories = document.querySelector("#categories");
console.log("Number of categories:", categories.children.length);

const items = categories.children;

const element = [...items].map((item) => {
  const titel = item.firstElementChild.textContent;

  const element = item.lastElementChild.children.length;

  console.log("Category:", titel);
  console.log("Elements:", element);
});

