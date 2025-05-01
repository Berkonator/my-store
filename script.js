document.addEventListener("DOMContentLoaded", () => {
    const basePath = window.location.pathname.includes("/pages/") ? "../" : "";
    fetch(basePath + "layout/header.html")
     .then(response => response.text())
     .then(data => {
        document.getElementById("header").innerHTML = data;
     })
     .catch(error => {
        console.error("load error")
     })
})

document.addEventListener("DOMContentLoaded", () => {
    const basePath = window.location.pathname.includes("/pages/") ? "../" : "";
    fetch(basePath + "layout/footer.html")
     .then(response => response.text())
     .then(data => {
        document.getElementById("footer").innerHTML = data;
     })
     .catch(error => {
        console.error("load error")
     })
})

document.addEventListener("DOMContentLoaded", () => {
   const container = document.getElementById("product-list");
   if (container) {
     fetch("/components/product-card.html")
       .then(res => res.text())
       .then(cardHtml => {
         for (let i = 0; i < 20; i++) {
           const customHtml = cardHtml.replace(
             /src="[^"]*"/,
             'src="https://picsum.photos/200?random=' + i + '"'
           );
 
           const card = document.createElement("div");
           card.innerHTML = customHtml;
           container.appendChild(card.firstElementChild);
         }
       });
   }
 });