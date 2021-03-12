
function openTab(evt, TabName) {
    var i, conteinerBody, navLinks;
    conteinerBody = document.getElementsByClassName("conteinerBody");
    for (i = 1; i < conteinerBody .length; i++) {
        conteinerBody[i].style.display = "none";
    }
    navLinks = document.getElementsByClassName("navLinks");
    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].className = navLinks[i].className.replace(" active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
  }