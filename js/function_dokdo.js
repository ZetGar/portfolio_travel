$(function () {
  //header clss=sticky
  const $header = $("header");
  const $main = $("section.main");

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $header.addClass("sticky");
      $main.addClass("sticky");
    }
    if ($(window).scrollTop() <= 0) {
      $header.removeClass("sticky");
      $main.removeClass("sticky");
    }
  });

  // header_gnb
  const arrTopVal = [];

  for (let i = 0; i < 6; i++) {
    arrTopVal[i] = $("section").eq(i).offset().top;
  }

  const moveFn = function (idx) {
    $("html,body")
      .stop()
      .animate({ scrollTop: arrTopVal[idx] - 80 }, "easeInOutCubic");
  };

  // 메뉴클릭시 스크롤되는 구문
  const $mnu = $(".gnb>li>a");

  $mnu.on("click", function (evt) {
    evt.preventDefault();

    let nowIdx = $mnu.index(evt.currentTarget) + 1;

    moveFn(nowIdx);
  });

  // 스크롤시 gnb 활성화
  $(window).on("scroll", function () {
    const scrollTop = $(window).scrollTop();
    // console.log(scrollTop);

    for (let i = 0; i < 6; i++) {
      if (scrollTop >= arrTopVal[i] - 80) {
        $mnu
          .eq(i - 1)
          .parent("li")
          .addClass("on")
          .siblings()
          .removeClass("on");
      } else if (scrollTop < arrTopVal[1] - 70) {
        $mnu.parent("li").removeClass("on");
      }
    }
  });

  // login 모달창 열기
  const $login = $(".login");
  const $logBtn = $("a.login_btn");
  const $close = $(".btn_close");

  $logBtn.on("click", function () {
    $login.toggleClass("on");
  });
  $close.on("click", function () {
    $login.toggleClass("on");
  });

  // 이메일, 비밀번호 정규식 검사
  // var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;  //이메일 정규식
  var regExp =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/; //이메일 정규식

  var regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식

  const $email = $("#userid");
  const $pwd = $("#userpwd");
  const $subBtn = $("button.login_btn");

  $("form").on("submit", function (e) {
    const $subEmail = $email.val();
    const $subPwd = $pwd.val();

    if (regExp.test($subEmail) == false) {
      e.preventDefault();
      $(".email>p").show();
    } else if ($subEmail == "") {
      e.preventDefault();
      $(".email>p").show();
    }

    if (regex.test($subPwd) == false) {
      e.preventDefault();
      $(".pwd>p").show();
    } else if ($subPwd == "") {
      e.preventDefault();
      $(".pwd>p").show();
    }
  });

  // 독도의 자연
  const $nt_pagination = $(".na_gnb>li");
  const $nt_content = $(".na_box");

  $nt_pagination.on("click", function (evt) {
    evt.preventDefault();
    let nowIdx = $nt_pagination.index(evt.currentTarget);
    console.log(nowIdx);

    $nt_content.eq(nowIdx).fadeIn().siblings().hide();
  });
});
