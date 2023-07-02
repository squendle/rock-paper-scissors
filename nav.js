const logo = document.querySelector("#logo");
const navItems = document.querySelectorAll(".nav-items");

function changeLogoColor(e){
  logo.setAttribute("src", "img/logo2.png");
};

function removeLogoColor(e){
  logo.setAttribute("src", "img/logo.png");
};

function changeItemColor(e) {
  this.classList.add("purp-text");
};

function removeItemColor(e) {
  this.classList.remove("purp-text");
}

logo.addEventListener("mouseover", changeLogoColor);
logo.addEventListener("mouseout", removeLogoColor);
navItems.forEach(item => item.addEventListener("mouseover", changeItemColor));
navItems.forEach(item => item.addEventListener("mouseout", removeItemColor));