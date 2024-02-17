// Scroll stuff

document.addEventListener("DOMContentLoaded", function() {
  var prevScrollPos = window.scrollY || window.pageYOffset;
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {
    var currentScrollPos = window.scrollY || window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px"; // Adjust this value to hide the header completely
    }
    prevScrollPos = currentScrollPos;

    if (currentScrollPos > 0) {
      navbar.classList.add("visible");
    } else {
      navbar.classList.remove("visible");
    }

    handleScroll();
  });
});

function handleScroll() {

  const popUpDivs = document.querySelectorAll('.info');

  popUpDivs.forEach((popUpDiv) => {
    if (isInViewport(popUpDiv)) {
      popUpDiv.classList.add("popEffect", "visible");
    }
  });
  var popUpDiv1 = document.getElementById("introduction");

  if (isInViewport(popUpDiv1)) {
    popUpDiv1.classList.add("popEffect", "visible");
  }
}

// Show Content STuff

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight / 2.5 && rect.bottom >= windowHeight / 2.5;
}

// Image Hover

$(document).ready(function()
{
    $("#mtfuji").hover(
        function()
        {
            $(this).attr("src", "mtfuji.gif");
        },
        function()
        {
            $(this).attr("src", "mtfuji_static.jpg");
        });
});

// URL Stuff

function openInNewWindow(url) {
  window.open(url, '_blank');
}