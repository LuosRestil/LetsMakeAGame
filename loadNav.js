document.addEventListener("DOMContentLoaded", function () {
  fetch("navContent.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav").innerHTML = data;
    })
    .catch((error) => console.error(error));
});
