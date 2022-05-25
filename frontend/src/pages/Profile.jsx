import { useEffect, useState } from 'react';
import { useUserAuth } from '../context/AuthContext/auth-context';
import firebase from 'firebase';
import { FullScreenCard } from '../components';

export default function Profile() {
   const [savedData, setSavedData] = useState();
   const { user } = useUserAuth();
   const fName = user.displayName.split(' ');

   const readSaveData = () => {
      const dbRef = firebase.database().ref();
      dbRef
         .child('users')
         .child(user.uid)
         .get()
         .then((snapshot) => {
            if (snapshot.exists()) {
               // console.log(snapshot.val().savedTrip);
               setSavedData(snapshot.val().savedTrip);
            } else {
               console.log('No data available');
            }
         })
         .catch((error) => {
            console.error(error);
         });
   };

   useEffect(() => {
      readSaveData();
   }, []);

   console.log(savedData);

   return (
      <div className="flex m-8 p-8">
         <section className="w-1/3 text-justify border-solid rounded-xl border border-gray-300 p-6">
            <p className="font-semibold text-2xl text-justify">
               Hello, {fName[0]}!
            </p>

            <i className="bx bxs-user-circle text-8xl block text-center mt-6" />

            <i className="bx bx-badge-check text-4xl font-thin mt-6" />
            <p className="font-semibold text-xl mb-3">Identity verification</p>
            <p className="text-base leading-tight ">
               Show others you’re really you with the identity verification
               badge.
            </p>
            <button className="border-solid rounded-lg border border-gray-600 transition duration-500 ease-in-out block mt-3 p-2 hover:bg-gray-900 hover:text-white">
               Get the badge
            </button>
            <hr className="bg-gray-300 w-full h-0.5 my-10" />

            <p className="font-medium text-xl">{fName[0]} Confirmed</p>
            <span className="flex justify-content mt-3 text-justify">
               <i className="bx bx-check text-2xl font-semibold"></i>
               <p>Email address</p>
            </span>
         </section>
         <section className="w-full text-justify p-6">
            <p className="font-semibold text-3xl">Saved Trip</p>
            <section className="p-5">
               {savedData && savedData.length > 0 && (
                  <FullScreenCard value={savedData} />
               )}
            </section>
         </section>
      </div>
   );
}
