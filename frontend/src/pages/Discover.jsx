import { React } from 'react';
import './pagebg.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecommendCardHotel } from '../components';

export default function Discover() {

   const [backendDataHotel, setBackendDataHotel] = useState([]);
   // console.log('save hot ahe ka', backData);
   const navigate = useNavigate();

   const getData = async () => {
      try {
         // setLoading(true);
         
         //------------------------------------------------------------------------
         const response2 = await axios.get('http://127.0.0.1:8000/htlrec/');
         //console.log('response 2:', response2.data);
         //console.log('response 2 add:', response2.data.address);


      
         setBackendDataHotel(response2.data);
         // backData = response.data;
      } catch (error) {
         console.log(error);
      }
   };

   console.log(backendDataHotel)

   useEffect(() => {
      getData();
   }, []);

   return (
      <div>
         <div>Discover</div>
         <p>
            {backendDataHotel.address[0]}
         </p>
      </div>
   );
}
