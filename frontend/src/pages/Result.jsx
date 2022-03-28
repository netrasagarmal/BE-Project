import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecommendCard } from '../components';

export default function Result() {
   // const { isLoading, setLoading } = useLoader();

   const [backendData, setBackendData] = useState([]);
   // console.log('save hot ahe ka', backData);
   const navigate = useNavigate();

   const getData = async () => {
      try {
         // setLoading(true);
         const response = await axios.get('http://127.0.0.1:8000/attrec/');
         console.log('respo', response.data);
         setBackendData(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getData();
   }, []);

   console.log('setState', backendData);
   // console.log('name', backendData.name[0]);

   return (
      <div>
         <section className="">
            {backendData.length > 0 &&
               backendData.map((item, index) => {
                  return (
                     <div key={`${item.value}-${index}`}>
                        <RecommendCard value={item} />
                     </div>
                  );
               })}
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
