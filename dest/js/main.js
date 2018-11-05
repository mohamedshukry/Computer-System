/* global $ , alert , console*/
$(function () {
      
      // open search
    $(".search-input").on("click" , function(event){
        event.preventDefault();
        $(".search").fadeIn("slow");
    });
    // close search
    $(".close-search").on("click" , function(event){
        event.preventDefault();
        $(".search").fadeOut("slow");
    })

    // Change icon of mobile menu
    $('button.navbar-toggler').click(function(event) {
        event.preventDefault();
        $(this).find('i').toggleClass('icofont-navigation-menu icofont-ui-close');
    });

    //======= counter   =======//
    $('.counter .count .timer').countTo();

    //======= change active li onclick it =======//
    $(".nav li").on("click", function() {
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });
    //======= change active button onclick it =======//
    $(".button-work button").on("click", function() {
        $(".button-work button").removeClass("active");
        $(this).addClass("active");
    });
    // upload file
    // $(".attachments li").on("click" , function(){
    //     $(this).find(".input").trigger('click');
    // })
   $(document).on('click','.attachments li i',function(){
        $(this).parent().find('input').trigger('click');
   });
   // comment
   $(".comment").on("click" , function(event){
        event.preventDefault();
        $(this).closest(".post").find('.coment-area').slideToggle(700);
   });
    // sher
    $(".social-media .menu").on("click" , function(){
        $(this).toggleClass("active");
        $(".rotater").toggle();
    });
    // add member
    $(".add-member-show").on("click" , function(){
        $(".add-member").slideToggle(900);
    })

   //======= scroll Up =======//
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.scrollup').fadeIn('slow');
        }else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 200);
        return false;
    });

    //======= display dropmenu on hover =======//
    if ( $(window).width() > 576){
        $('.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
        });
    }
    $('.your-checkbox').prop('indeterminate', true);
    });
 