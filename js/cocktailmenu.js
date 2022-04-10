$(function(){

  $("li").hover(function(){
    //マウスが乗った時
    $(this).children("div").stop().fadeIn(300);
    $(this).children("div").children("p").stop().animate({"top" : 0}, 300);

  }, function(){
    //マウスが外れた時
    $(this).children("div").stop().fadeOut(300);
    $(this).children("div").children("p").stop().animate({"top" : 10}, 300);

  });

});


/*$(function(){

  var effect_btm = 100; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 1000; // エフェクトの時間(ms) 1秒なら1000

  //親要素と子要素のcssを定義
  $('.scroll-fade-row').css({
      opacity: 0
  });
  $('.scroll-fade-row').children().each(function(){
      $(this).css({
          opacity: 0,
          transform: 'translateY('+ effect_move +'px)',
          transition: effect_time + 'ms'
      });
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      var effect_pos = scroll_btm - effect_btm; 
      

    // エフェクトが発動したとき、子要素をずらしてフェードさせる
    $(".scroll-fade-row").each( function() {
        var this_pos = $(this).offset().top;
        if ( effect_pos > this_pos ) {
            $(this).css({
                opacity: 1,
                transform: 'translateY(0)'
            });
            $(this).children().each(function(i){
                $(this).delay(100 + i*200).queue(function(){
                    $(this).css({
                        opacity: 1,
                        transform: 'translateY(0)'
                    }).dequeue();
                });
            });
        }
    });
  });

});*/
$(function(){
  $(window).scroll(function () {
      
    // 2. ウィンドウの位置を取得する
    var scrollTop = $(this).scrollTop(); // ウィンドウ枠内の上の位置を取得する
    var scrollBottom = scrollTop + $(this).height(); // ウィンドウ枠内の下の位置を取得する

    // 3. 指定した要素にそれぞれ処理を追加する
    $(".gallery .gallery-item").each(function (i) {

        // 4. ウィンドウの位置と表示したい要素の位置を比較する
        if (scrollBottom > $(this).offset().top) {
            
            // 5. 0.3秒毎ごとに1つずつfadeinクラスを付与する
            var target = this;
            setTimeout(function () {
                $(target).addClass("fadein");
            }, 400 * i);

        }

    });
  });
});



//SPver.詳細表示方法
$(Window).on('load resize',function(){

  if($(window).width()<640){

    $("li").click(function(){
      //マウスが乗った時
      $(this).children("div").stop().fadeIn(300);
      $(this).childeren("div").children("p").stop().animate({"top" : 0}, 300);

    }, function(){
      //マウスが外れた時
      $(this).children("div").stop().fadeOut(300);
      $(this).childeren("div").children("p").stop().animate({"top" : 10}, 300);

    });
  }
});
