$(function(){
  // header부분 스크롤메뉴
  $(window).on('scroll',function(){
    if($(window).scrollTop()<=0){
      $('header').removeClass('sticky');
    }
    if($(window).scrollTop()>0){
      $('header').addClass('sticky');
    }
  });


  // 추천코스
  const csPagi =$('.cs_pagination>li>a');
  const csMap = $('.cs_map>ol>li')
  let nowIdx = 0;

  csPagi.on('click', function(e){
    e.preventDefault();

    nowIdx = csPagi.index($(this));

    csPagi.parent('li').eq(nowIdx).addClass('on').siblings().removeClass('on');



    csMap.eq(nowIdx).addClass('on').siblings().removeClass('on');

   
    mpLocal.removeClass('on');

    mpCont.hide();
    console.log(mpLocal.index());
  });

  

  // map 그림부분 페이지네이션
  const mpLocal = $('.cs_map>ol>li>div>a');
  const mpCont = $('.cs_map>ul>li>div');

  mpLocal.on('click', function(e){
    e.preventDefault();

    nowIdx = mpLocal.index(e.currentTarget);


    mpLocal.eq(nowIdx).addClass('on').siblings().removeClass('on');
    mpCont.eq(nowIdx).fadeIn().siblings().hide();

  });


  // 리뷰 슬라이드
  const rvslideFn = function(){
    const $rvslide=$('.rv_container>ul');
    const $firstSlide = $rvslide.children('li').eq(0);
    const $secondSlide = $rvslide.children('li').eq(1);


    $rvslide.stop().animate({left:-400}, function(){
      $rvslide.children().eq(0).appendTo($rvslide);
      $rvslide.css({left:0})
    });
  }
  // 리뷰 슬라이드 실행
  $(window).on('load',function(){
    setInterval(rvslideFn, 3000);
  });


  


  // 추천여행지 슬라이드
  const tvslideFn = function(){
    const $travelcontainer = $('.tv_content>ul');
    const $firstSlide = $('.tv_content>ul>li').eq(0);
    const $secondSlide = $('.tv_content>ul>li').eq(1);

    $secondSlide.stop().animate({top:0},1000,function(){
      $firstSlide.css({top: 500});
      $firstSlide.appendTo($travelcontainer);
    });
  };
  
  $(window).on('load',function(){
    setInterval(tvslideFn, 2500);
    setInterval(rvslideFn, 3000);

  });


  // 서핑
  const $spPagi = $('.sp_paginateion>li>a');

  $spPagi.on('click',function(evt){
    evt.preventDefault();
    nowIdx = $spPagi.index($(this));

    $spPagi.parent().eq(nowIdx).addClass('on').siblings().removeClass('on');

  });

  // 식도락여행

  const $fdPagi = $('.food>div>ul>li>a');

  $fdPagi.on('click', function(evt){
    evt.preventDefault();
    nowIdx = $fdPagi.index($(this));

    $fdPagi.parent().eq(nowIdx).addClass('on').siblings().removeClass('on');
    
  });

});