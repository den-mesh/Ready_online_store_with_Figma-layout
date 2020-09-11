$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<botton class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></botton>',
    nextArrow:
      '<botton class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-rigth.svg" alt=""></botton>',
  });

  $(".search__tabs-item").on("click", function (e) {
    e.preventDefault();

    $(".search__tabs-item").removeClass("search__tabs-item--active");
    $(".search__content-item").removeClass("search__content-item--active");

    $(this).addClass("search__tabs-item--active");
    $($(this).attr("href")).addClass("search__content-item--active");
  });
});
