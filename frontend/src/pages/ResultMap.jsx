import axios from 'axios';
import { useEffect, useState } from 'react';
import { MapCard } from '../components';

export default function ResultMap() {
   const [backendData, setBackendData] = useState([]);

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

   return (
      <div>
         <div>
            <p>Day1</p>
            <section className="">
               {backendData.length > 0 &&
                  backendData.map((item, index) => {
                     return (
                        <div key={`${item.value}-${index}`}>
                           <MapCard value={item} />
                        </div>
                     );
                  })}
            </section>
         </div>
      </div>
   );
}
