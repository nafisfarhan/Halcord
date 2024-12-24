document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none';
});