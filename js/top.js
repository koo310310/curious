$(function(){

  // ロゴ
  $(window).scroll(function(){
    var scr = $(window).scrollTop();
    if(scr > 1){
       $('header .inner h1').addClass('scrolled');
    }else{
       $('header .inner h1').removeClass('scrolled');
    }
 })

  // スライドショー
  $(".bxslider").bxSlider({
    auto: true,
    mode: "fade",
    controls: false,
    pager: false
  });

  // フェードイン
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });

// カクテルを動かす
var dance = $('.dance');
$(window).scroll(function () {
  $(dance).each(function () {
    var offset = $(this).offset().top;
    var scroll = $(window).scrollTop(); 
    var windowHeight = $(window).height();
    if (scroll > offset - windowHeight + 50) {
      $(this).addClass("active");
    }
  });
});

});

$(window).on('load',function(){
  //TOPページを開く際のアニメーション
  console.log($.cookie("KEY"));
  if($.cookie("KEY")!="ok"){
    setTimeout(function(){
      $('.start p').fadeIn(1600);
    },500); //0.5秒後にロゴをフェードイン!
    setTimeout(function(){
      $('.start').fadeOut(500);
      $.cookie("KEY", "ok");
    },3500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
  }else{
    $('.start').hide();
  }
});
