import './pagebg.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { BannerCarousel, PopularDesCard } from '../components';   

export default function Home() {
   const [bannerData, setBannerData] = useState();
   const navigate = useNavigate();

   useEffect(() => {
      (async () => {
         try {
            let dataArr = [];
            const docs = await getDocs(collection(db, 'carouselData'));
            docs.forEach((doc) => {
               // doc.data() is never undefined for query doc snapshots
               dataArr.push({ ...doc.data(), id: doc.id });
            });
            setBannerData(dataArr);
         } catch (err) {
            console.log(err.message);
         }
      })();
   }, []);

   return (
      <div className="">
         <div className="backgroundHome">
            {bannerData && bannerData.length > 0 && (
               <BannerCarousel value={bannerData} />
            )}
         </div>

         <div className="mt-4">
            <h1 className="text-center font-medium text-xl">
               Easy to use, Easy to browse
            </h1>

            <div className="flex p-10">
               <span className="text-center px-2">
                  {' '}
                  <i className="bx bx-world text-7xl text-blue-500 font-thintext-7xl text-blue-500 font-thin"></i>
                  <p>
                     <b>Select Your Destination</b> from 1M+ New & popular
                     Tourist Attractions
                  </p>
               </span>

               <span className="text-center px-2">
                  {' '}
                  <i className="bx bx-hotel text-7xl text-blue-500 font-thin"></i>
                  <p>
                     <b>Select Your Accommodation</b> from 1M+ Accommodations
                     around the Globe
                  </p>
               </span>

               <span className="text-center px-2">
                  {' '}
                  <i className="bx bx-dollar-circle text-7xl text-blue-500 font-thin"></i>
                  <p>
                     <b>Check Your Budget</b> with In-Built Trip Budget
                     Calculator in Multiple Currencies
                  </p>
               </span>

               <span className="text-center px-2">
                  {' '}
                  <i className="bx bx-calendar-check text-7xl text-blue-500 font-thin"></i>
                  <p>
                     <b>Finish Your Itinerary</b> with our Free online Vacation
                     Planner in few minutes
                  </p>
               </span>
            </div>
            <section className='flex justify-center'>
            {' '}
            <button onClick={() => navigate('/plantrip')} className="rounded shadow-md bg-gray-300 hover:bg-black hover:text-white text-black right-1 left-1 p-2 mb-10 w-max">
               Start Planning
            </button>
            </section>
         </div>

         <hr className="bg-gray-400 w-full h-0.5" />

         <div className="mt-4">
            <h2 className="line-1 font-medium text-xl anim-typewriter">
               Popular Destinations This Season
            </h2>
            {bannerData && bannerData.length > 0 && (
               <PopularDesCard value={bannerData} />
            )}
         </div>
      </div>
   );
}
