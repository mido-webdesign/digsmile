$(function() {

// クリックしたらページトップへ移動
function pageTopBtn() {
    $('html, body').animate({
        'scrollTop': 0
    }, 500);
}

// ヘッダーのロゴをクリックした時にページトップへ移動
// index.htmlのみ適用
$('.header-logo').click(function(){
    pageTopBtn();
});

// ハンバーガーメニューのロゴをクリックした時にページトップへ移動
// index.htmlのみ適用
$('#burger-nav-logo').click(function(){
    pageTopBtn();
});


var imgHeight = $('.fv-image-wrapper').outerHeight(); //キービジュアルの高さ
var bgHeight = $('#fv').outerHeight(); //ファーストビューの高さ

// ハンバーガーボタンをクリックした時に
$('#burger-btn').click(function() {
    // ハンバーガーがfvより上にある時
    if($(window).scrollTop() < imgHeight - 50) {
    // 閉じるボタンをつけたりとったり
    $(this).find('.bar').toggleClass('close');
    // メニュー画面を開いたり閉じたり
    $('.header-nav').toggleClass('slide-in');
    // マスクをつけたりとったり
    var $burgerMusk = $('.burger-musk');
    $burgerMusk.toggleClass('open');
    // スクロールを固定したりとったり
    $('body').toggleClass('noscroll');
    } else {
        // ハンバーガーがfvより下にある時
        // バーガーボタンを黒くする
        $('.bar').toggleClass('black');
        $('.menu').toggleClass('black');
        // 閉じるボタンをつけたりとったり
        $(this).find('.bar').toggleClass('close');
        // メニュー画面を開いたり閉じたり
        $('.header-nav').toggleClass('slide-in');
        // マスクをつけたりとったり
        var $burgerMusk = $('.burger-musk');
        $burgerMusk.toggleClass('open');
        // スクロールを固定したりとったり
        $('body').toggleClass('noscroll'); 
    }
});

// ハンバーガーメニューのリンクをクリックしたら移動してメニューが閉じる
$('#header-nav a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        'scrollTop': position
    }, 500);
    $('#burger-btn .bar').removeClass('close');
    $('.header-nav').removeClass('slide-in');
    var $burgerMusk = $('.burger-musk');
    $burgerMusk.removeClass('open');
    $burgerMusk.hide();
    $('body').removeClass('noscroll');
});

// スクロールしたらロゴとハンバーガーメニューの色を変える
$(window).on('load scroll', function() {
    if($(window).scrollTop() < imgHeight - 50) {
        // メインビジュアル内にいるのでクラスを外す
        $('.header-logo').removeClass('black');
    } else {
        // メインビジュアルより下なのでクラスをつける
        $('.header-logo').addClass('black');
    }

    if($(window).scrollTop() < bgHeight - 50) {
        // メインビジュアル内にいるのでクラスを外す
        $('.bar').removeClass('black');
        $('.menu').removeClass('black');
    } else {
        // メインビジュアルより下なのでクラスをつける
        $('.bar').addClass('black');
        $('.menu').addClass('black');  
    }
});




});
