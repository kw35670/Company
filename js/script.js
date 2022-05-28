/*==================
ふわっと表示
==================*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

new WOW().init();


/*==================
ドロワーメニュー
==================*/

jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});


/*==================
フローティングアイテム
==================*/

jQuery(window).on("scroll", function($) {
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.to-top').show();
	} else {
		jQuery('.to-top').hide();
	}
});


/*==================
スムーススクロール
==================*/

jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;

  if(id != '#') {
    position = jQuery(id).offset().top - header + 1;
  }

  jQuery('html,body').animate({
    scrollTop: position
  },
  300);
});


/*==================
header 下線
==================*/

jQuery('.header_nav li a').click(function() {
  jQuery('.header_nav li a').removeClass( 'is-active' );
  jQuery(this).addClass( 'is-active' );
  return false;
});

// var header = jQuery('.header').innerHeight();

// $(function() {
//     // ナビゲーションのリンクを指定
//    var navLink = $('.header_nav li a');
 
//     // 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
//    var contentsArr = new Array();
//   for (var i = 0; i < navLink.length; i++) {
//        // コンテンツのIDを取得
//       var targetContents = navLink.eq(i).attr('href');
//       // ページ内リンクでないナビゲーションが含まれている場合は除外する
//       if(targetContents.charAt(0) == '#') {
//          // ページ上部からコンテンツの開始位置までの距離を取得
//             var targetContentsTop = $(targetContents).offset().top - header - 1;
//          // ページ上部からコンテンツの終了位置までの距離を取得
//             var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true);
//          // 配列に格納
//             contentsArr[i] = [targetContentsTop, targetContentsBottom]
//       }
//    };

 
//   // 現在地をチェックする
//    function currentCheck() {
//        // 現在のスクロール位置を取得
//         var windowScrolltop = $(window).scrollTop();
//         for (var i = 0; i < contentsArr.length; i++) {
//            // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
//           if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
//                 // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
//                navLink.removeClass('is-active');
//                navLink.eq(i).addClass('is-active');
//                 i == contentsArr.length;
//           } else if (windowScrolltop < contentsArr[0][0]){
//               navLink.removeClass('is-active');
//           }
//        };
//   }
 
//    // ページ読み込み時とスクロール時に、現在地をチェックする
//   $(window).on('load scroll', function() {
//       currentCheck();
//   });
// });


/*==================
モーダルエリア
==================*/

jQuery('.js-close-button').on('click', function(e) {
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).hide();
  
})

jQuery('.js-open-button').on('click', function(e) {
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).show();

})


/*==================
Q & A
==================*/
jQuery('.qa-box_q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box_icon').toggleClass('is-open');
});
