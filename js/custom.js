(function mainScript() {
    "use strict";
    const offcanvasToggle = document.querySelector(
      '[data-bs-toggle="offcanvas"]',
    );
    const offcanvasCollapse = document.querySelector(".offcanvas-collapse");
    offcanvasToggle.addEventListener("click", function () {
      offcanvasCollapse.classList.toggle("open");
    });
})();
  
// slick slider
$('.trust-logo-deck').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  slidesPerRow: 1,
  autoplay: true,
  dots: false,
  prevArrow: $('.trust-container .prev'),
  nextArrow: $('.trust-container .next'),
  mobileFirst: true,
  responsive: [{
          breakpoint: 575,
          settings: {
              rows: 1,
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 991,
          settings: {
              rows: 1,
              slidesToShow: 4,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 1200,
          settings: {
              rows: 1,
              slidesToShow: 4,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 1600,
          settings: {
              rows: 1,
              slidesToShow: 5,
              slidesToScroll: 1
          }
      }
  ]
});