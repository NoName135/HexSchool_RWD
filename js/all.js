$(document).ready(function() {
  $('.scrollTop').click(function(event){
    event.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $("html, body").animate({scrollTop: targetPos - 55}, 1000);
  })

  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    $('.scrollTop').each(function(){
      var target = $(this).attr('href'); 
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();
      if(targetPos - 55 <= scrollPos && (targetPos - 55 + targetHeight) > scrollPos){
      $(".scrollTop").removeClass("active")
      $(this).addClass("active");
      }else{
      $(this).removeClass("active")
      }
    })
    $(".animated").each(function(){
      var thisPos = $(this).offset().top;
      if((windowHeight / 1.1 + scrollPos) >= thisPos){
      $(this).addClass("fadeIn");
      }
    });
  })

  $(".showmenu").on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('body').toggleClass('menu-show');
    $('.showmenu i').toggleClass('fa-bars fa-times');
  });
  $(".menu li a").on('click', function() {
    /* Act on the event */
    $('body').removeClass('menu-show');
    $('.showmenu i').toggleClass('fa-bars fa-times');
  });

  $(".slidetop a").click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $("html,body").animate({scrollTop: 0}, 500);
  });

  $(".aside a").click(function(event) {
    /* Act on the event */
    $(this).toggleClass('active');
    $(this).parent().siblings().find('a').removeClass('active');
  });

  $(".fa-heart").click(function(event) {
    /* Act on the event */
    $(this).toggleClass('fas far');
  });
});


