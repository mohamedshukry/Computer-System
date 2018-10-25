/* global $ , alert , console*/
$(function () {

    if ($('.nav a:first-child').hasClass('active')){
            $('#previous').hide();
        } else {
            $('#previous').show();
    }

    $("#next").click(function(event){
        event.preventDefault();
        $(".content-present-link .nav").find(".nav-link.active").next().trigger('click');
        $('#previous').show();
        if ($('.nav a:last-child').hasClass('active')){
                $('#next').hide();
                $(".viwe-all").show();
            } else {
                $('#next').show();
        }
        // $(".content-present-link .nav").find(".nav-link.active").removeClass("active").attr("aria-selected", "false").next().addClass("active").attr("aria-selected", "true");
      })
     $("#previous").click(function(event){
        event.preventDefault();
        $(".content-present-link .nav").find(".nav-link.active").prev().trigger('click');
        $('#next').show();
         if ($('.nav a:first-child').hasClass('active')){
            $('#previous').hide();
        } else {
            $('#previous').show();
    }
      });
     $("#viwe").on("click" , function(event){
        event.preventDefault();
        $(this).hide();
        $('#previous').hide();
        $(".nav-link").toggle();    

     })
});     