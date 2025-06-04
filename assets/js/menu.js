// Toggle mobile navigation menu
window.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.querySelector('nav.topnav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }
});
