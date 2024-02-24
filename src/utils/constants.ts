export const API_KEY = '7b7a0852-b523-41ff-a804-8be86af2e554';
export const urlImages = 'https://zagriev.ru/images/';
export const settingsSlider = {
  className: 'center',
  dots: true,
  // infinite: true,
  // speed: 500,
  initialSlide: 0,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
export const settingsSliderLogotips = {
  className: 'center',
  // dots: true,
  infinite: true,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 6,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
};
