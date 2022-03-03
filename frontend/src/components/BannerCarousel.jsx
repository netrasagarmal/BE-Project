import React from 'react';
import { Carousel } from 'react-carousel-minimal';

export const BannerCarousel = (bannerData) => {
   const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold'
   };

   const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold'
   };

   const carouselStyle = {
      textAlign: 'center',
      maxWidth: '1024px',
      maxHeight: '500px',
      margin: '2rem auto 5rem auto'
   };

   console.log(bannerData.value);

   return (
      <div>
         <Carousel
            data={bannerData.value}
            time={4000}
            width="1024px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={carouselStyle}
         />
      </div>
   );
};
