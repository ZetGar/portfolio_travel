$(function(){
  
  // gnb 메뉴
  const $gnb = $('.gnb');
  const $lnb = $('.lnb');

  $gnb.on('mouseover', function(){
    $lnb.stop().slideDown();
    $('.hd_bg').stop().slideDown();
  });
  $gnb.on('mouseout', function(){
    $lnb.stop().slideUp();
    $('.hd_bg').stop().slideUp();
  });


  // login 모달창 열기
  const $login= $('.login');
  const $logBtn = $('a.login_btn');
  const $close = $('.btn_close');


  $logBtn.on('click', function(){
    $login.toggleClass('on');
  });
  $close.on('click', function(){
    $login.toggleClass('on');
  });

  

  // 이메일, 비밀번호 정규식 검사
  // var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;  //이메일 정규식
  var regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;  //이메일 정규식

  var regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식

  const $email = $('#userid');
  const $pwd=$('#userpwd');
  const $subBtn = $('button.login_btn');
  

  $('form').on('submit', function(e){
    const $subEmail = $email.val();
    const $subPwd= $pwd.val();


    if(regExp.test($subEmail) == false){
      e.preventDefault();
      $('.email>p').show();
    } else if( $subEmail == ''){
      e.preventDefault();
      $('.email>p').show();
    } 
    
    if(regex.test($subPwd) == false){
      e.preventDefault();
      $('.pwd>p').show();
    } else if($subPwd == ''){
      e.preventDefault();
      $('.pwd>p').show();
    } 
  });




  //section_travel_slide : 하트 클릭
  const $nicBox = $('.slide_container>a');
  const $heart = $('.heart');

  $nicBox.on('click', function(evt){
    evt.preventDefault();

    nowIdx = $nicBox.index(this);

    $heart.toggleClass('on');

    if($heart.hasClass('on')){
      $heart.eq(nowIdx).css({
        'animation': 'heart 0.7s forwards'
      }) 
    } else {
      $heart.eq(nowIdx).css({
        'animation': 'b_heart 0.7s forwards'
      })
    }
  });

  // section_travel_slide :자동 슬라이드
  const moveFn = function(){
    const $container = $('.screen');
    const $firstSlide = $('.screen li').eq(0);
    const $secondSlide = $('.screen li').eq(1);
    const $thirdSlide = $('.screen li').eq(2);
    const $foSlide = $('.screen li').eq(3);
    const $fifSlide = $('.screen li').eq(4);
    const $screen = $('.screen');

    $screen.animate({left:0},1000,function(){
      $firstSlide.css({left:-300, transform: 'scale(0)'});
      $secondSlide.css({left:0, transform:'scale(0.8)','z-index' :0});
      $thirdSlide.css({left:150, transform:'scale(1)','z-index' :100});
      $foSlide.css({left:330, transform:'scale(0.8)','z-index' :0});
      $fifSlide.css({left:650});
      $firstSlide.appendTo($container);
    });
  };

  $(window).on('load', function(){
    setInterval(moveFn, 3000);
  });

  $('.play').on('click',function(evt){
    evt.preventDefault();

    $('.play').addClass('on');
    $('.pause').removeClass('on');


    clearInterval(intervalKey);

    intervalKey = setInterval(() => {
      
      if(nowIdx<7){
        nowIdx++;
      }else{
        nowIdx=0;
      }

      moveFn();

    }, 2000);
  });

  $('.pause').on('click', function(evt){
    evt.preventDefault();
    $('.play').removeClass('on');
    $('.pause').addClass('on');
    clearInterval(intervalKey);
  });

});



//   $('.fotright_container').on('click', function(evt){
//     evt.preventDefault();
//     $('.fotright_container').toggleClass('on');
//     $('.fot_right>ul').stop().slideToggle();
//   });
// });