document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".swiper-container", {
    loop: true,
    mousewheel: {
      releaseOnEdges: true,
    },
    // allowTouchMove: false,
    preventClicks: false,
    slidesPerView: "auto",
    // centeredSlides: true,
    // freeMode: true, // 이미지가 스크롤 중에 멈출 위치를 자유롭게 설정합니다.
    speed: 100,
  });
});