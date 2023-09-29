var acc = document.getElementsByClassName("header__icons");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active1");

    /* Toggle between hiding and showing the active panel */
    var nav__func = this.nextElementSibling;
    if (nav__func.style.left === "-100%") {
        nav__func.style.left = "0";
    } else {
        nav__func.style.left = "-100%";
    }
  });
}