$(document).ready(function(){
  var slideIndex = 1;
    showSlides(slideIndex);

    $(".right").click(function() {
      slideIndex++;
      showSlides(slideIndex);
    });

    $(".left").click(function() {
      slideIndex--;
      showSlides(slideIndex);
    });

    function showSlides(n) {
      var i;
      var slides = $(".book img");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides.eq(i).css("display", "none");
      }
      slides.eq(slideIndex - 1).css("display", "block");
    }
})
