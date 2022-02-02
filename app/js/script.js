const main = document.querySelector('#main');
const header = document.querySelector('header');
const contentTitle = document.querySelector('.content-title');

const aboutMeBtn = document.querySelector('.about-me-btn');
const programingBtn = document.querySelector('.programing-btn');
const artBtn = document.querySelector('.art-btn');
const blogBtn = document.querySelector('.blog-btn');

const mobileBackBtn = document.querySelector('.back');

const aboutMeContent = document.querySelector('.about-me-content');
const programingContent = document.querySelector('.programing-content');
const artContent = document.querySelector('.art-content');
const blogContent = document.querySelector('.blog-content');

  mobileBackBtn.addEventListener('click', function() {
    CloseAllContent(null);
    ToggleMain(false);
  });

  aboutMeBtn.addEventListener('click', function() {
    contentTitle.innerHTML = 'About Me';
    CheckOpenContent(aboutMeContent);
  });
  programingBtn.addEventListener('click', function() {
    contentTitle.innerHTML = 'Programing';
    CheckOpenContent(programingContent);
  });
  artBtn.addEventListener('click', function() {
    contentTitle.innerHTML = 'Art';
    CheckOpenContent(artContent);
  });
  blogBtn.addEventListener('click', function() {
    contentTitle.innerHTML = 'Blog';
    CheckOpenContent(blogContent);
  });

  function CheckOpenContent(content) {
    if (!main.classList.contains('open')) ToggleMain(true);
    CloseAllContent(content);
    if (!content.classList.contains('fade-in')) {
      content.classList.remove('fade-out');
      content.classList.add('fade-in');
    }
  }

  function CloseAllContent(content) {
    CheckCloseContent(aboutMeContent);
    CheckCloseContent(programingContent);
    CheckCloseContent(artContent);
    CheckCloseContent(blogContent);
    setTimeout(() => {DisableAllContent(content)}, 230);
  }

  function DisableAllContent(content) {
    DisableContent(aboutMeContent);
    DisableContent(programingContent);
    DisableContent(artContent);
    DisableContent(blogContent);
    if(content !== null) content.style.setProperty('display', 'block');
  }

  function DisableContent(content) {
    content.style.setProperty('display', 'none');
  }

  function CheckCloseContent(content) {
    if (content.classList.contains('fade-in')) {
      content.classList.remove('fade-in');
      content.classList.add('fade-out');
    }
  }

  function ToggleMain(tf) {
    if (tf) {
      main.classList.add('open');
      main.classList.remove('fade-out');
      main.classList.add('fade-in');
    }
    else {
      main.classList.remove('open');
      main.classList.remove('fade-in');
      main.classList.add('fade-out');
    }
  }

