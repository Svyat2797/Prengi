const slider = tns ({
    container: '.solution__inner',
    items: 1,
    nav: false,
    controls: false,
    speed: 1000,
    arrowKeys: true,
    rewind: true,
    autoHeight: true,
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next'); 
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev'); 
  });