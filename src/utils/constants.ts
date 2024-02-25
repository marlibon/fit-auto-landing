import Slider, { LazyLoadTypes } from 'react-slick';

export const API_KEY = '7b7a0852-b523-41ff-a804-8be86af2e554';
// export const url = 'http://servis-paveleckaya.ru';
export const url = window.location.origin;
export const urlImages = url + '/images/';

export const urlProductsImages = urlImages + 'products/';
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
  arrows: false,
  initialSlide: 0,
  slidesToShow: 6,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  lazyLoad: 'progressive' as LazyLoadTypes,
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
export const settingsSliderGalleryModal = {
  className: 'center',
  dots: false,
  infinite: true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: false,
  arrows: true,
  lazyLoad: 'progressive' as LazyLoadTypes
};
export const settingsSliderGallery = {
  className: 'center',
  dots: true,
  infinite: true,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 2,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  arrows: false,
  rows: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        // rows: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        // rows: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        // rows: 2
      }
    }
  ],
  onLazyLoad: () => {
    console.log('onLazyLoad');
  },
  lazyLoad: 'progressive' as LazyLoadTypes
};
