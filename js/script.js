window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var btnTop = document.getElementById("btn-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
