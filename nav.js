const logo = document.querySelector("#logo");
const navItems = document.querySelectorAll(".nav-items");

function changeLogoColor(e){
  logo.setAttribute("src", "img/logo2.png");
};

function removeLogoColor(e){
  logo.setAttribute("src", "img/logo.png");
};

logo.addEventListener("mouseover", changeLogoColor);
logo.addEventListener("mouseout", removeLogoColor);