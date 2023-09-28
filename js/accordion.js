var acc = document.getElementsByClassName("qa__question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var qa__answer = this.nextElementSibling;
    if (qa__answer.style.display === "block") {
        qa__answer.style.display = "none";
    } else {
        qa__answer.style.display = "block";
    }
  });
}