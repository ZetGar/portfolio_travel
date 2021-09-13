$(function(){
  // 메뉴 위치변경
  const arrTopVal = [];
  const $mnu = $('.gnb>li>a');

  for(let i=0;i<6;i++){
    arrTopVal[i] = $('section').eq(i).offset().top;
  }
  
  const moveFn = function(idx){
    $('html,body').stop().animate({
      scrollTop:arrTopVal[idx+2]},
      'easeInOutCubic');
 }

    $mnu.on('click',(evt)=>{
      evt.preventDefault();
  
      const nowIdx = $mnu.index(evt.currentTarget);
      moveFn(nowIdx);
    });

    $(window).on('scroll',function(){

      const scrollTop = $(window).scrollTop();
      console.log(scrollTop);
    
        for(let i=0;i<6;i++){
     
        if(scrollTop>=arrTopVal[i]-200){
          $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
        } else if(scrollTop<arrTopVal[1]){
          $mnu.parent().removeClass('on');
        }
      }

    });
  // 독도메인비주얼페이지
  const $mnVisual = $('.main_visual');
  const $star1 = $('section.main #star1');
  const $star2 = $('section.main #star2');
  const $sun = $('section.main #sun');
  const $dokdo = $('section.main #dokdo');
  const $cloude = $('section.main .cloude');
  const $mnBird = $('section.main .mn_bird');

  $(window).on('scroll',function(){
    const value = $(window).scrollTop();

    // 이미지 변화
    $star1.css({left : value*0.25 + 'px',
  	opacity: '0',
  animation: 'none'});
    $star2.css({left : value*0.25 + 'px',
  	opacity: '0',
  animation: 'none'});

    $sun.css({
      bottom: value*3 + 'px',
      backgroundColor:'#0b6fb3',
      opacity:'1'
  });

  $cloude.css({
    opacity:'0.7'
  });

  $mnBird.css({
    bottom: 300 + 'px',
    opacity:'1'
});

    $dokdo.css({top: value*0 + 'px'});

    $mnVisual.css({
      backgroundColor:'#0b6fb3'
    });

  });
   

  // 독도의 자연
  const $naPagination = $('section.nature > .na_gnb > li>a');
  const $naContent = $('.na_box');
  const $naContext= $('.nabox>dl');

  let naIdx=0;

  $naPagination.on('click', function(evt){
    evt.preventDefault();

    naIdx = $naPagination.index(this);

    // 활성화표시
    $(this).eq(naIdx).parent().addClass('on').siblings().removeClass('on');

    $naContent.eq(naIdx).addClass('on').siblings().removeClass('on');

  });

  // 독도의 구성
  const $comBox = $('.com_box > .com_boxcontainer');
  const $plusX = $('section.component .plusX');

  $comBox.on('click', function(){
  let leVal = $(this).css('left');

    if(leVal<'0'){
    $(this).css({	left: '0'});
    $plusX.css({
      animationName: 'plusX',
      animationDuration: '1s',
      animationFillMode: 'forwards'
    });
    $('.com_box > .com_boxcontainer  p').css({
      transform:'translateX(0px)'
    });
  } else {
    $(this).css({	left: '-900px'});
    $plusX.css({
      animationName: 'plus',
      animationDuration: '1s',
      animationFillMode: 'forwards'
    });
  }
    
  });


});