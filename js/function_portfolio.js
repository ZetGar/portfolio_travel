$(function(){
  // header 영역 부분
  $(window).on('scroll', function(){
    const $header = $('header');
    $('header').toggleClass('sticky', window.scrollY > 0);
  });

  const arrTopVal = [];

  for(let i=0;i<3;i++){
    arrTopVal[i] = $('section').eq(i).offset().top;
  }

  const moveFn = function(idx){
    $('html,body').stop().animate({scrollTop:arrTopVal[idx]-80})
  }


  const $lnb = $('.lnb>li');
  $lnb.on('click', function(evt){
    evt.preventDefault();

    const nowIdx = $lnb.index(evt.currentTarget);
    moveFn(nowIdx);
  });

    // $lnb.eq(nowIdx).addClass('on').siblings().removeClass('on');
    $(window).on('scroll', function(){
      const scrollTop = $(window).scrollTop();
      console.log(scrollTop);

    
    for(let i=0;i<3;i++){

      if(scrollTop>=arrTopVal[i]-400){
        $lnb.eq(i).addClass('on').siblings().removeClass('on');
      } else if(scrollTop<arrTopVal[0]){
        $lnb.eq(0).addClass('on');
      }
    }
  });

  $('.logo>a').on('click',function(evt){
    evt.preventDefault();

    $('html,body').stop().animate({
      scrollTop:0
    });
  });


  

  $('.total').on('click',function(){
    $(this).toggleClass('on');

    if($(window).width()>992){
    
    if($('.total').hasClass('on')){
      $('nav').css({
        right: '-7%'
      });
    } else {
      $('nav').css({
        right: '-500px'
      });
    }
    }
  });
  
  // contact
  $('.gnb>.pop_con').on('click', function(evt){
    evt.preventDefault();


    $('.total').removeClass('on').on('click', function(){
      if($(window).width()>992){
        $('.nav').css({
          right: '-500px'
        });
      }
    });

    $('#popup').toggleClass('on');

    if($('#popup').hasClass('on')){
      $('#popup').css({display:'block'});
      $('.gnb>li').eq(3).addClass('on').siblings().removeClass('on');
    }

    $('.close').on('click',function(){
      $('#popup').css({display:'none'}); 
      $('.gnb>li').eq(2).addClass('on').siblings().removeClass('on');
    });

    $('.contact').on('click',function(){
      $('#popup').css({display:'none'}); 
      $('.gnb>li').eq(2).addClass('on').siblings().removeClass('on'); 
    });
    
  });
});
