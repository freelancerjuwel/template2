$(window).on('load',function(){
    $('#preloader-inner').fadeOut();
     $('#preloader').fadeOut();
});

$(function() {
  $("#team-members").owlCarousel({
      items:2,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
      nav:true,
      dots:false,
      navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>' ]
       
  });
});
