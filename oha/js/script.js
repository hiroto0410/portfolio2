jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  jQuery(this).parent().toggleClass("is-open");
  jQuery(this).next().slideToggle();
});

const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 82,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});

// モーダルを開く
jQuery(".js-modal-open").on("click", function (e) {
  e.preventDefault();

  jQuery(".about-modal")[0].showModal();
});

// モーダルを閉じる
jQuery(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  jQuery(".about-modal")[0].close();
});

// スムーススクロール
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 1000;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;

  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});

// ドロワーナビゲーションクリック時にスクロールできないようにする

$(function () {
  // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
  $("#js-drawer-icon").click(function () {
    // 現在のbodyタグのoverflowスタイルを確認
    if ($("body").css("overflow") === "hidden") {
      // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
      $("body").css({ height: "", overflow: "" });
    } else {
      // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
      $("body").css({ height: "100%", overflow: "hidden" });
    }
  });
});

// トップに戻るボタンの表示・非表示

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#js-pagetop').addClass('is-show');
        } else {
            $('#js-pagetop').removeClass('is-show');
        }
    });
});

// Wowの読み込み
new WOW().init();