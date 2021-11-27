import React from 'react';

export const Banner = ({ bannerContent }) => {
   return (
      <div className="relative overflow-hidden">
         <img
            className="rounded"
            src={bannerContent.coverImage}
            alt={bannerContent.title + ' Image'}
         />
         <div className="absolute rounded-b bottom-0 mr-0.5 text-white drop-shadow blur-3 bg-gray-600 bg-opacity-60 p-2">
            <h1 className="text-2xl font-semibold underline">
               {bannerContent.title}
            </h1>
            <p className="font-light">{bannerContent.description}</p>
         </div>
      </div>
   );
};
