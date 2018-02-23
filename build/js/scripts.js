$( document ).ready(function() {
  // alert('now i work on reload');


  // Click function for show the Modal
  $(".show").on("click", function(){
    $(this).next(".mask").addClass("active");
  });

  // Function for close the Modal
  function closeModal(){
    $(".mask").removeClass("active");
  }

  // Call the closeModal function on click
  $(".close, .mask").on("click", function(){
    closeModal();
  });

  // Counter
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  // Waypoints
  // $('h3').addClass('animated fadeIn');

  // Cards
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });

  btn = document.querySelector('.all');
  var add = function(){ btn.classList.add('example'); }
  var remove = function(){ btn.classList.remove('example'); }

  add();
  setTimeout(remove, 2000);
  setTimeout(add, 3000);
  setTimeout(remove, 4000);

});
