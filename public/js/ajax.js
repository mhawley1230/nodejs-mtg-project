$(document).ready(function() {
  function makeActive(button){
    var currentActiveElement = document.getElementsByClassName('active');
    currentActiveElement[0].classList.remove('active');
    button.classList += ' active';
  }

  $('#standard-tab').on('click', function() {
    makeActive(this);
    
  });

  $('#modern-tab').on('click', function() {
    makeActive(this);
  });

  $('#legacy-tab').on('click', function() {
    makeActive(this);
  });

  $('#vintage-tab').on('click', function() {
    makeActive(this);
  });
});
