const headerBG = document.getElementById("bg");
const navigation = document.getElementById("navigation");
const topOfNav = navigation.offsetTop;

window.addEventListener("scroll", function() {
  headerBG.style.opacity = 1 - +window.pageYOffset / 550 + "";
  headerBG.style.top = +window.pageYOffset + "px";
  headerBG.style.backgroundPositionY = -+window.pageYOffset / 2 + "px";
});

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = navigation.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
