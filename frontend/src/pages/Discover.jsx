import { Link } from 'react-router-dom';
import './discover.css';

export default function Discover() {
   return (
      <>
         <h1
            style={{
               width: '50%',
               margin: 'auto',
               fontSize: 30,
               color: 'gray'
            }}
         >
            Explore Your Favorite Destinations Worldwide!
         </h1>

         <div style={{ display: 'flex', margin: 'auto', width: '65%' }}>
            <div style={{ width: '35%', paddingTop: 70, marginRight: 0 }}>
               {/* // <div className=" h-full bg-center bg-no-repeat bg-cover"> */}
               {/* <img src='/bg-image.jpg' alt="Mountains" />*/}
               <Link to={'detail'} state={{ continent: 'Asia' }}>
                  <div
                     class="max-w-sm rounded overflow-hidden shadow-lg transform hover:bg-gray-600
                transition duration-500 hover:scale-125"
                     style={{ width: '95%' }}
                  >
                     <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Asia</div>
                        {/* <img src= /> */}
                     </div>
                  </div>
               </Link>

               <Link to={'detail'} state={{ continent: 'Europe' }}>
                  <div
                     class="max-w-sm rounded overflow-hidden shadow-lg 
               transform hover:bg-gray-600 transition duration-500 hover:scale-125"
                     style={{ width: '95%' }}
                  >
                     <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Europe</div>
                        {/* <img src= /> */}
                     </div>
                  </div>
               </Link>

               <Link to={'detail'} state={{ continent: 'North America' }}>
                  <div
                     class="max-w-sm rounded overflow-hidden shadow-lg transform hover:bg-gray-600
                transition duration-500 hover:scale-125"
                     style={{ width: '95%' }}
                  >
                     <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">North America</div>
                        {/* <img src= /> */}
                     </div>
                  </div>
               </Link>

               <Link to={'detail'} state={{ continent: 'South America' }}>
                  <div
                     class="max-w-sm rounded overflow-hidden shadow-lg transform hover:bg-gray-600
                transition duration-500 hover:scale-125"
                     style={{ width: '95%' }}
                  >
                     <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">South America</div>
                        {/* <img src= /> */}
                     </div>
                  </div>
               </Link>

               <Link to={'detail'} state={{ continent: 'Australia' }}>
                  <div
                     class="max-w-sm rounded overflow-hidden shadow-lg transform hover:bg-gray-600
                transition duration-500 hover:scale-125"
                     style={{ width: '95%' }}
                  >
                     <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Australia</div>
                        {/* <img src= /> */}
                     </div>
                  </div>
               </Link>

               <Link to={'detail'} state={{ continent: 'Africa' }}>
                  <div
                     class="max-w-sm rounded overflow-hidden shadow-lg transform hover:bg-gray-600
                transition duration-500 hover:scale-125"
                     style={{ width: '95%' }}
                  >
                     <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Africa</div>
                        {/* <img src= /> */}
                     </div>
                  </div>
               </Link>

               <Link to={'detail'} state={{ continent: 'Antartica' }}>
                  <div
                     class="max-w-sm rounded overflow-hidden shadow-lg transform hover:bg-gray-600
                transition duration-500 hover:scale-125"
                     style={{ width: '95%' }}
                  >
                     <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Antartica</div>
                        {/* <img src= /> */}
                     </div>
                  </div>
               </Link>
            </div>
            <div
               style={{
                  width: '55%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  padding: 10
               }}
            >
               {/* <img src={'/images/0001.jpg'} style={{height:'35%', maxWidth:'200%', opacity:0.9}}/> */}

               <div style={{ position: 'relative' }}>
                  <img src={'/images/ladakh.jpg'} className={'bannerImages'} />
                  <div className="textOnImages">Ladakh</div>
               </div>

               <div style={{ position: 'relative' }}>
                  <img src={'/images/sikkim.jpg'} className={'bannerImages'} />
                  <div className="textOnImages">Sikkim</div>
               </div>

               <div style={{ position: 'relative' }}>
                  <img
                     src={'/images/himalaya.jpg'}
                     className={'bannerImages'}
                  />
                  <div className="textOnImages">Himalaya</div>
               </div>

               <div style={{ position: 'relative' }}>
                  <img src={'/images/dubai.jpg'} className={'bannerImages'} />
                  <div className="textOnImages">Dubai</div>
               </div>

               <div style={{ position: 'relative' }}>
                  <img
                     src={'/images/himachal.jpg'}
                     className={'bannerImages'}
                     style={{ height: '60%', marginTop: -85 }}
                  />
                  <div className="textOnImages">Himachal</div>
               </div>

               <div style={{ position: 'relative' }}>
                  <img
                     src={'/images/rajasthan.jpg'}
                     className={'bannerImages'}
                  />
                  <div className="textOnImages">Rajasthan</div>
               </div>

               <div style={{ position: 'relative' }}>
                  <img
                     src={'/images/goa.jpg'}
                     className={'bannerImages'}
                     style={{ width: 140, marginTop: -90, height: 170 }}
                  />
                  <div className="textOnImages">Goa</div>
               </div>

               <div style={{ position: 'relative' }}>
                  <img
                     src={'/images/maldives.jpg'}
                     className={'bannerImages'}
                     style={{ marginTop: -90, width: 140 }}
                  />
                  <div className="textOnImages">Maldives</div>
               </div>
            </div>
         </div>
      </>
   );
}
