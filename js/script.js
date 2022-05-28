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
