import axios from 'axios';
import { useEffect, useState } from 'react';
import { LocationCard } from '../components';
import { useUserAuth } from '../context/AuthContext/auth-context';
import firebase from 'firebase';

export default function ResultMap() {
   const [backendData, setBackendData] = useState([]);
   // const perDayPlan = [];
   const { user } = useUserAuth();

   // const sortDayPlan = (tripData) => {
   //    let i = 0,
   //       j = 4;
   //    var k = tripData.length / 4;

   //    for (let l = 0; l < k; l++) {
   //       perDayPlan.push(tripData.slice(i, j));
   //       i = j;
   //       j = j + 4;
   //    }
   // };

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

   const writeUserData = () => {
      firebase
         .database()
         .ref('users/' + user.uid)
         .set({
            username: user.displayName,
            savedTrip: backendData
         });
   };

   // sortDayPlan(backendData);
   // console.log('perDayData: ', perDayPlan);

   useEffect(() => {
      getData();
   }, []);

   return (
      <div>
         <h1 className="p-4 text-5xl text-center anim-typewriter line-1 font-semibold">
            Here is your Planned Trip...
         </h1>
         <div className="w-full flex justify-evenly bg-gray-200 p-5">
            <section className="grid grid-cols-2">
               {backendData.length > 0 &&
                  backendData.map((item, index) => {
                     return (
                        <div key={`${item.value}-${index}`}>
                           <LocationCard value={item} />
                        </div>
                     );
                  })}
            </section>
         </div>
         <section className="flex justify-center my-4">
            {' '}
            <button
               onClick={writeUserData}
               className="rounded shadow-md hover:text-white hover:bg-black bg-gray-300 p-2 w-20"
            >
               Save
            </button>
         </section>
      </div>
   );
}
