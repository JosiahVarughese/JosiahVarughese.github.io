const main = document.querySelector('#main');
const header = document.querySelector('header');
const links = document.querySelectorAll('.link');

links.forEach(function(link) {
  link.addEventListener('click', function() {
    if (main.classList.contains('open')) {
      main.classList.remove('open');
      //header.classList.remove('fade-out');
      //header.classList.add('fade-in');
      main.classList.remove('fade-in');
      main.classList.add('fade-out');
    } else {
      main.classList.add('open');
      //header.classList.remove('fade-in');
      //header.classList.add('fade-out');
      main.classList.remove('fade-out');
      main.classList.add('fade-in');
    }
  });
});

