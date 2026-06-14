const articleDialog = document.getElementById("article-dialog");
const carDialog = document.getElementById("car-dialog");
const addCarBtn = document.getElementById("add-car-btn");
const addArticleBtn = document.getElementById("add-article-btn");
const articleForm = document.getElementById("article-form");
const carForm = document.getElementById("car-form");

addArticleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  articleDialog.show();
});

addCarBtn.addEventListener("click", (e) => {
  e.preventDefault();

  carDialog.show();
});

articleDialog.addEventListener("click", (e) => {
  if (e.target.closest(".close-btn") || e.target.closest(".cancel")) {
    articleDialog.close();
  }
});

carDialog.addEventListener("click", (e) => {
  if (e.target.closest(".close-btn") || e.target.closest(".cancel")) {
    carDialog.close();
  }
});

articleForm.addEventListener("submit", (e) => {
    e.preventDefault();
    articleDialog.close();

  const formData = new FormData(articleForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

  fetch(articleForm.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Article sent", data);
      articleForm.reset();
    })
    .catch((error) => {
      console.error("Article send error", error);
      alert("Article send error", error);
    });
});

carForm.addEventListener("submit", (e) => {
  e.preventDefault();
  carDialog.close();

  const formData = new FormData(carForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

  fetch(carForm.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Car sent", data);
      carForm.reset();
    })
    .catch((error) => {
      console.error("Car send error", error);
      alert("Car send error", error);
    });
});
