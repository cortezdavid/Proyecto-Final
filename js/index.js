$(window).scroll(function() {
    if($("#nav").offset().top > 56){
        $("#nav").addClass("navFondo");
    } else {
        $("#nav").removeClass("navFondo");
    }
});