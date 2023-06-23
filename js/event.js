$(document).ready(function() {
  // плакаты анимация
  $('.hol').mouseover(function() {
    $('.hol2').show(200);
  });
  $('.hol').mouseleave(function() {
    $('.hol2').hide(200);
  });

  $('.fam').mouseover(function() {
    $('.fam2').show(200);
  });
  $('.fam').mouseleave(function() {
    $('.fam2').hide(200);
  });
  //
  //
  //
  $('.mar').mouseover(function() {
    $('.mar2').show(200);
  });
  $('.mar').mouseleave(function() {
    $('.mar2').hide(200);
  });

  $('.new').mouseover(function() {
    $('.new2').show(200);
  });
  $('.new').mouseleave(function() {
    $('.new2').hide(200);
  });

  $('.did').mouseover(function() {
    $('.did2').show(200);
  });
  $('.did').mouseleave(function() {
    $('.did2').hide(200);
  });

  $('.nc').mouseover(function() {
    $('.nc2').show(200);
  });
  $('.nc').mouseleave(function() {
    $('.nc2').hide(200);
  });

  $('.colab').mouseover(function() {
    $('.colab2').show(200);
  });
  $('.colab').mouseleave(function() {
    $('.colab2').hide(200);
  });

  $('.winter').mouseover(function() {
    $('.winter2').show(200);
  });
  $('.winter').mouseleave(function() {
    $('.winter2').hide(200);
  });

  $('.wend').mouseover(function() {
    $('.wend2').show(200);
  });
  $('.wend').mouseleave(function() {
    $('.wend2').hide(200);
  });

  $('.charity').mouseover(function() {
    $('.charity2').show(200);
  });
  $('.charity').mouseleave(function() {
    $('.charity2').hide(200);
  });

  $('.kids').mouseover(function() {
    $('.kids2').show(200);
  });
  $('.kids').mouseleave(function() {
    $('.kids2').hide(200);
  });

  $('.serious').mouseover(function() {
    $('.serious2').show(200);
  });
  $('.serious').mouseleave(function() {
    $('.serious2').hide(200);
  });
  // закончилась анимация

  // форма

  $(".button").click(function(){
    $(".question").show(250),
    $(".background").show(200);
    $(".blur").show();
  });


  $(".continue").click(function(){
    $(".question").hide(200),
    $(".forma").show(250);
});




  $(".cross").click(function(){
    $(".forma").hide(200),
    $(".question").hide(200),
    $(".background").hide(250),
    $(".blur").hide();
  });



  $(".complete").click(function(){
    $(".forma").hide(200),
    $(".forma_after").show(250),
    $(".forma_after").delay(2900).hide(200),
    $(".background").delay(3200).hide(200);
    $(".blur").hide();

  });
    });
