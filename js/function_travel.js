$(function () {
  // gnb 메뉴
  const $gnb = $(".gnb");
  const $lnb = $(".lnb");

  $gnb.on("mouseover", function () {
    $lnb.stop().slideDown();
    $(".hd_bg").stop().slideDown();
  });
  $gnb.on("mouseout", function () {
    $lnb.stop().slideUp();
    $(".hd_bg").stop().slideUp();
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

  // 호텔예약 input
  const jeju = ["제주도", "제주시", "서귀포시"];
  const busan = [
    "부산",
    "해운대구, 기장군",
    "부산역, 남포, 자갈치, 송도, 영도",
    "수영구, 광안리",
    "서면, 연산",
    "동래구, 사상구",
  ];
  const seoul = [
    "서울",
    "강남구, 서초구, 송파구,광진구, 강동구",
    "종로구, 동대문구",
    "영등포, 여의도",
    "강서구, 김포공항",
    "마포구, 서대문구, 신촌, 홍대",
    "성북구, 도봉구, 강북구",
    "구로구, 관악구",
    "중구, 용산구, 이태원",
  ];
  const gangwon = [
    "강원도",
    "속초",
    "강릉",
    "양양",
    "평창",
    "춘천",
    "홍천",
    "정선군",
  ];
  const chung = [
    "충청북도",
    "충청남도",
    "대전",
    "천안",
    "태안",
    "단양",
    "충주(수안보)",
    "제천",
    "증평",
    "세종",
  ];
  const incheon = [
    "인천",
    "중구(인천공항, 영종도,을왕리,월미도)",
    "연수구, 송도",
  ];
  const gyeonggi = ["경기도", "고양시", "가평", "수원", "용인", "화성"];
  const gyeongsang = [
    "경상북도",
    "경상남도",
    "경주",
    "거제",
    "포항",
    "통영",
    "남해",
    "울산",
    "안동",
    "대구",
  ];
  const jeonla = [
    "전라북도",
    "전라남도",
    "전주",
    "여수",
    "광주",
    "목표",
    "군산",
  ];

  $("#local1").on("change", function () {
    let value = $("#local1").val();
    console.log(value);

    $("#local2").html("").show();

    if ($("#local1").val() == "jeju") {
      for (let i = 0; i < jeju.length; i++) {
        let tamplete = `<option>${jeju[i]}</option>`;
        $("#local2").append(tamplete);
      }
    } else if ($("#local1").val() == "busan") {
      $("#local2").html("").show();
      for (let i = 0; i < busan.length; i++) {
        let tamplete = `<option>${busan[i]}</option>`;
        $("#local2").append(tamplete);
      }
    } else if ($("#local1").val() == "seoul") {
      $("#local2").html("").show();
      for (let i = 0; i < seoul.length; i++) {
        let tamplete = `<option>${seoul[i]}</option>`;
        $("#local2").append(tamplete);
      }
    } else if ($("#local1").val() == "gangwon") {
      $("#local2").html("").show();
      for (let i = 0; i < gangwon.length; i++) {
        let tamplete = `<option>${gangwon[i]}</option>`;
        $("#local2").append(tamplete);
      }
    } else if ($("#local1").val() == "chung") {
      $("#local2").html("").show();
      for (let i = 0; i < chung.length; i++) {
        let tamplete = `<option>${chung[i]}</option>`;
        $("#local2").append(tamplete);
      }
    } else if ($("#local1").val() == "incheon") {
      $("#local2").html("").show();
      for (let i = 0; i < incheon.length; i++) {
        let tamplete = `<option>${incheon[i]}</option>`;
        $("#local2").append(tamplete);
      }
    } else if ($("#local1").val() == "gyeonggi") {
      $("#local2").html("").show();
      for (let i = 0; i < gyeonggi.length; i++) {
        let tamplete = `<option>${gyeonggi[i]}</option>`;
        $("#local2").append(tamplete);
      }
    } else if ($("#local1").val() == "gyeongsang") {
      $("#local2").html("").show();
      for (let i = 0; i < gyeongsang.length; i++) {
        let tamplete = `<option>${gyeongsang[i]}</option>`;
        $("#local2").append(tamplete);
      }
    } else if ($("#local1").val() == "jeonla") {
      $("#local2").html("").show();
      for (let i = 0; i < jeonla.length; i++) {
        let tamplete = `<option>${jeonla[i]}</option>`;
        $("#local2").append(tamplete);
      }
    }
  });

  // 호텔예약 인원, 객실
  const $plusPeo = $(".peoplus");
  const $miusPeo = $(".peomius");
  const $textPeo = $(".peop");
  const $plusRom = $(".romplus");
  const $miusRom = $(".rommius");
  const $textRom = $(".romp");

  let sum = 0;

  $plusPeo.on("click", function (evt) {
    evt.preventDefault();

    for (let i = 0; i <= 0; i++) {
      sum += i + 1;
    }
    $textPeo.text(sum);
    console.log(sum);

    if (sum <= 0) {
      sum = 1;
      $textPeo.text(1);
    }
  });

  $miusPeo.on("click", function (evt) {
    evt.preventDefault();

    for (let i = 0; i >= 0; i--) {
      sum -= i + 1;
    }

    $textPeo.text(sum);
    console.log(sum);

    if (sum <= 0) {
      sum = 1;
      $textPeo.text(1);
    }
  });

  $plusRom.on("click", function (evt) {
    evt.preventDefault();

    for (let i = 0; i <= 0; i++) {
      sum += i + 1;
    }
    $textRom.text(sum);
    console.log(sum);

    if (sum <= 0) {
      sum = 1;
      $textRom.text(1);
    }
  });

  $miusRom.on("click", function (evt) {
    evt.preventDefault();

    for (let i = 0; i >= 0; i--) {
      sum -= i + 1;
    }

    $textRom.text(sum);
    console.log(sum);

    if (sum <= 0) {
      sum = 1;
      $textRom.text(1);
    }
  });

  //section_travel_slide : 하트 클릭
  const $nicBox = $(".slide_container>a");
  const $heart = $(".heart");

  $nicBox.on("click", function (evt) {
    evt.preventDefault();

    nowIdx = $nicBox.index(this);

    $heart.toggleClass("on");

    if ($heart.hasClass("on")) {
      $heart.eq(nowIdx).css({
        animation: "heart 0.7s forwards",
      });
    } else {
      $heart.eq(nowIdx).css({
        animation: "b_heart 0.7s forwards",
      });
    }
  });

  // section_travel_slide :자동 슬라이드
  const moveFn = function () {
    const $container = $(".screen");
    const $firstSlide = $(".screen li").eq(0);
    const $secondSlide = $(".screen li").eq(1);
    const $thirdSlide = $(".screen li").eq(2);
    const $foSlide = $(".screen li").eq(3);
    const $fifSlide = $(".screen li").eq(4);
    const $screen = $(".screen");

    $screen.animate({ left: 0 }, 1000, function () {
      $firstSlide.css({ left: -300, transform: "scale(0)" });
      $secondSlide.css({ left: 0, transform: "scale(0.8)", "z-index": 0 });
      $thirdSlide.css({ left: 150, transform: "scale(1)", "z-index": 100 });
      $foSlide.css({ left: 330, transform: "scale(0.8)", "z-index": 0 });
      $fifSlide.css({ left: 650 });
      $firstSlide.appendTo($container);
    });
  };

  $(window).on("load", function () {
    setInterval(moveFn, 3000);
  });

  $(".play").on("click", function (evt) {
    evt.preventDefault();

    $(".play").addClass("on");
    $(".pause").removeClass("on");

    clearInterval(intervalKey);

    intervalKey = setInterval(() => {
      if (nowIdx < 7) {
        nowIdx++;
      } else {
        nowIdx = 0;
      }

      moveFn();
    }, 2000);
  });

  $(".pause").on("click", function (evt) {
    evt.preventDefault();
    $(".play").removeClass("on");
    $(".pause").addClass("on");
    clearInterval(intervalKey);
  });
});

//   $('.fotright_container').on('click', function(evt){
//     evt.preventDefault();
//     $('.fotright_container').toggleClass('on');
//     $('.fot_right>ul').stop().slideToggle();
//   });
// });
