import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecommendCardAttraction, RecommendCardHotel } from '../components';

export default function Result() {
   // const { isLoading, setLoading } = useLoader();

   const [backendDataAttraction, setBackendDataAttraction] = useState([]);
   const [backendDataHotel, setBackendDataHotel] = useState([]);
   // console.log('save hot ahe ka', backData);
   const navigate = useNavigate();

   const getData = async () => {
      try {
         // setLoading(true);
         const response1 = await axios.get('http://127.0.0.1:8000/attrec/');
         console.log('response 1:', response1.data);
         //------------------------------------------------------------------------
         const response2 = await axios.get('http://127.0.0.1:8000/htlrec/');
         console.log('response 2:', response2.data);
         console.log('response 2 add:', response2.data.address);


         setBackendDataAttraction(response1.data);
         setBackendDataHotel(response2.data);
         // backData = response.data;
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getData();
   }, []);

   console.log('setState Attraction:', backendDataAttraction);
   console.log('setState Hotel:', backendDataHotel);
   // console.log('name', backendData.name[0]);

   return (
      <div>
         <section className="">
            <h1>Attraction Recommendation</h1>
            <br></br>
            {backendDataAttraction.length > 0 &&
               backendDataAttraction.map((item, index) => {
                  return (
                     <div key={`${item.value}-${index}`}>
                        <RecommendCardAttraction value={item} />
                     </div>
                  );
               })}
         </section>

         <section className="">
            <h1>Hotel Recommendation:</h1>
            <br></br>
               <RecommendCardHotel value={backendDataHotel} />
         </section>

         <div className="flex justify-center align items-center space-x-5 my-4">
            <button
               onClick={() => navigate('/plantrip')}
               className="w-20 bg-gray-300 p-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
            >
               Back
            </button>
            <button
               onClick={() => navigate('/resultMap')}
               className="w-20 bg-gray-300 p-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
            >
               Next
            </button>
         </div>
      </div>
   );
}
