$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

var pic = document.getElementbyId('mypic')
function(){
    if (screenWidth < 768) {
      pic.style.height = '80%';
      pic.style.width = '80%';

    }
  }


//use media query and grid format for web pages
//to avoid using margin and padding every time
// and size issue.