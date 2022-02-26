import axios from 'axios';
import { useEffect, useState } from 'react';
import { RecommendCard } from '../components';

export default function Result() {
   // const { isLoading, setLoading } = useLoader();

   const [backendData, setBackendData] = useState([]);
   // console.log('save hot ahe ka', backData);

   const getData = async () => {
      try {
         // setLoading(true);
         const response = await axios.get('http://127.0.0.1:8000/attrec/');
         // setBackendData(JSON.parse(response.data));
         // const backData = JSON.parse(response.data);
         // console.log('respo', backData.name[0]);
         // backendData = backData;
         // console.log('parse', backData);
         console.log('respo in result', response.data);
         setBackendData(response.data);
         // backData = response.data;
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
      </div>
   );
}
