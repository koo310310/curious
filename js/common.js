$(function(){

  // ハンバーガーメニュー
  $(".hum-wrapper button").click(function(){
    $(this).toggleClass("active");
    $(".hum-nav").slideToggle(300);
  });

  // Totop
  $('.totop').click(function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
