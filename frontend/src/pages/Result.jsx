import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecommendCard, RestaurantCard } from '../components';
import HOTEL from '../images/Travel Card/hotel.png';
import ATTR from '../images/Travel Card/canberra.png';
import RESTAU from '../images/Travel Card/cutlery.png';

export default function Result() {
   // const { isLoading, setLoading } = useLoader();

   const [backendData, setBackendData] = useState([]);
   const [hotelName, setHotelName] = useState();
   const [restaurantName, setRestaurantName] = useState();
   // console.log('save hot ahe ka', backData);
   const navigate = useNavigate();

   const getData = async () => {
      try {
         // setLoading(true);
         const responseAttr = await axios.get('http://127.0.0.1:8000/attrec/');
         const responseHotel = await axios.get('http://127.0.0.1:8000/htlrec/');
         const responseRestaurant = await axios.get(
            'http://127.0.0.1:8000/restrec/'
         );
         console.log('respo', responseAttr.data);
         console.log('htl', responseHotel.data);
         console.log('RESTAU', responseRestaurant);
         setBackendData(responseAttr.data);
         setHotelName(responseHotel.data);
         setRestaurantName(responseRestaurant.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getData();
   }, []);

   console.log('setState', backendData);
   // console.log('setHotel->', hotelName[0]);
   // console.log('name', backendData.name[0]);

   return (
      <div>
         <h1 className="p-4 text-5xl text-center font-semibold anim-typewriterREC line-1">
            Here is our Recommendation for you...
         </h1>
         <section id="attr" className="m-4 p-2 rounded shadow-md bg-gray-200">
            <span className="flex items-center">
               <img className="w-1/12 p-2.5" src={ATTR} alt="Attraction" />
               <p className="text-4xl font-semibold">Attraction</p>
            </span>
            <span className="grid grid-cols-3 ">
               {backendData.length > 0 &&
                  backendData.map((item, index) => {
                     return (
                        <div className="" key={`${item.value}-${index}`}>
                           <RecommendCard value={item} />
                        </div>
                     );
                  })}
            </span>
         </section>
         <section id="hotel" className="m-4 p-2 rounded shadow-md bg-gray-200">
            <span className="flex items-center">
               <img className="w-1/12 p-2.5" src={HOTEL} alt="Attraction" />
               <p className="text-4xl font-semibold">Hotel</p>
            </span>
            <span>
               <div className="text-center m-auto">
                  <div className="p-4 m-2.5 bg-white rounded shadow">
                     <p className="m-1">Name: {hotelName.hotelname[0]}</p>
                     <p className="m-1">City: {hotelName.city[0]}</p>
                     <p className="m-1">Address: {hotelName.address[0]}</p>
                     <p className="m-1">
                        Description: {hotelName.ratedescription[0]}
                     </p>
                  </div>
               </div>
            </span>
         </section>
         <section
            id="restaurant"
            className="m-4 p-2 rounded shadow-md bg-gray-200"
         >
            <span className="flex items-center">
               <img className="w-1/12 p-2.5" src={RESTAU} alt="Attraction" />
               <p className="text-4xl font-semibold">Restaurant</p>
            </span>
            <span className="grid grid-cols-2">
               {restaurantName &&
                  restaurantName.length > 0 &&
                  restaurantName.map((item, index) => {
                     return (
                        <div key={`${item.value}-${index}`}>
                           <RestaurantCard value={item} />
                        </div>
                     );
                  })}
            </span>
         </section>
         <div className="flex justify-center align items-center space-x-5 my-4">
            <button
               onClick={() => navigate('/plantrip')}
               className="transition duration-500 ease-in-out w-20 bg-gray-300 p-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
            >
               Back
            </button>
            <button
               onClick={() => navigate('/resultMap')}
               className="transition duration-500 ease-in-out w-20 bg-gray-300 p-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
            >
               Next
            </button>
         </div>
      </div>
   );
}
