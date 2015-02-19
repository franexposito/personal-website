$(document).ready(function () {
  $('.hover-me').on('mouseover', function() {
    $('.hover-me').hide();
    $('.text-info-appear').slideDown();
  });

  $('#info').on('mouseleave', function() {
    $('.text-info-appear').slideUp();
    setTimeout(function() {$('.hover-me').fadeIn();}, 500);
  });

  $('#navicon').on('click', function(evt) {
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      $(this).children('i').removeClass('fa-rotate-90');
      $('#menu').slideUp();
    }
    else {
      $(this).addClass('active');
      $(this).children('i').addClass('fa-rotate-90');
      $('#menu').slideDown();
    }
    evt.preventDefault();
    evt.stopPropagation();
  });

  $('html').click(function(evt) {
    if ( $('#navicon').hasClass('active') ) {
      $('#navicon').removeClass('active');
      $('#navicon').children('i').removeClass('fa-rotate-90');
      $('#menu').slideUp();
    }
  });

  $('#menu').click(function(evt){
    evt.stopPropagation();
  });

  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      var newval = $(window).height() - 55;
      $('.logo').stop(true, true).animate({ top: newval }, 600 );
    } else {
      if ($('.logo').css('top') != '50px') {
        $('.logo').animate({ top: "50px" }, 600 );
      }
    }
  });
})
