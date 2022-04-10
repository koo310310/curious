/*$(function(){
  var effect_pos = 150; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 80; // どのぐらい要素を動かすか(px)
  var effect_time = 300; // エフェクトの時間(ms) 1秒なら1000

  // フェードする前のcssを定義
  $('.scroll-fade').css({
      opacity: 0,
      transform: 'translateY('+ effect_move +'px)',
      transition: effect_time + 'ms'
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      effect_pos = scroll_btm - effect_pos;

      // effect_posがthis_posを超えたとき、エフェクトが発動
      $('.scroll-fade').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
          }
      });
  });
});*/


//フェードイン
$(function(){
  $(window).scroll(function (){
      $('.scroll-fade').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});

//必須項目が無記入の場合のアラート表示
$(function() {

    $(".alert").hide();
  
    $(".submitbtn").click(function(){
  
      var sendFlag=true;
  
      //name
      if(!$("input[type='text']").val()){
        $(".namealert").show();
        sendFlag=false;
      }else{
        $(".namealert").hide();
      }
  
      //mail address
      if(!$("input[type='email']").val()){
        $(".emailalert").show();
        sendFlag=false;
      }else{
        $(".emailalert").hide();
      }

      //tel
      if(!$("input[type='tel']").val()){
        $(".telalert").show();
        sendFlag=false;
      }else{
        $(".tellalert").hide();
      }  

      if(sendFlag==false){
        return false;
      }
  
    });
  
  });
  