import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Banner } from '.';
import { bannerData } from './BannerData';

export const BannerCarousel = () => {
   return (
      <div>
         <CarouselProvider
            visibleSlides={1}
            step={1}
            naturalSlideWidth={400}
            naturalSlideHeight={210}
            totalSlides={bannerData.length}
            isPlaying={bannerData.length > 1}
            interval={9000}
         >
            <Slider>
               {bannerData.map((banner, index) => (
                  <Slide key={banner.id} index={index}>
                     <Banner bannerContent={banner} />
                  </Slide>
               ))}
            </Slider>
         </CarouselProvider>
      </div>
   );
};
