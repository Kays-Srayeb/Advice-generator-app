window.onload = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      let ident = document.getElementById("num");
      let quoteBox = document.getElementById("advice-text");
      ident.textContent = data["slip"].id;
      quoteBox.textContent = data["slip"].advice;
    })
    .catch((error) => {
      let ident = document.getElementById("num");
      let quoteBox = document.getElementById("advice-text");
      ident.textContent = '---';
      quoteBox.textContent = "Check Your Api Url";
    });
};


let btn = document.getElementById('btn');

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      let ident = document.getElementById("num");
      let quoteBox = document.getElementById("advice-text");
      ident.textContent = data["slip"].id;
      quoteBox.textContent = data["slip"].advice;
    })
    .catch((error) => {
      let ident = document.getElementById("num");
      let quoteBox = document.getElementById("advice-text");
      ident.textContent = '---';
      quoteBox.textContent = "Check Your Api Url";
    });
})