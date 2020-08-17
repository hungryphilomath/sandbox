// import 'regenerator-runtime/runtime'
import {projectName} from './common/constants.js';

document.addEventListener('DOMContentLoaded', () => {
  const carouselEl = document.querySelector('ace-carousel');
  const prevBtn = document.querySelector('[ace-carousel-prev-btn]');
  const nextBtn = document.querySelector('[ace-carousel-next-btn]');
  const carouselSlidesEl = document.querySelector('[ace-carousel-slides]');
  const carouselSlideEls = [...document.querySelectorAll('[ace-carousel-slide]')];

  const changeSlide = (newSlide) => {
    const slideIdSplit = newSlide.id.split('-');
    const newSlideNumber = parseInt(slideIdSplit[slideIdSplit.length - 1]);
    const activeSlideNumber = parseInt(carouselEl.getAttribute('ace-carousel-active-slide-number'));
    carouselEl.setAttribute('ace-carousel-active-slide-number', newSlideNumber);

    const prevSlideNumber = (newSlideNumber === 1) ? 5 : newSlideNumber - 1;
    const nextSlideNumber = (newSlideNumber === 5) ? 1 : newSlideNumber + 1;

    prevBtn.href = `#ace-carousel-1-slide-${prevSlideNumber}`;
    nextBtn.href = `#ace-carousel-1-slide-${nextSlideNumber}`;

    console.log('custom event dispatched', activeSlideNumber, newSlideNumber);
  };


  // If ace-carousel-scrollable
  let scrollTimeout = null;
  carouselSlidesEl.addEventListener('scroll', (e) => {
    if (!e.currentTarget.scrollLeft) {
      return;
    }

    if(scrollTimeout !== null) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      const carouseSlidesElLeftPos = carouselSlidesEl.getBoundingClientRect().left;
      const newSlide = carouselSlideEls.find(slide => slide.getBoundingClientRect().left === carouseSlidesElLeftPos);

      if (newSlide) {
        changeSlide(newSlide);
      }
    }, 150);
  }, {passive: true});
});

window.addEventListener('load', () => {
  console.log(`${projectName}: load event`);
});
