import { Link } from 'react-router-dom';
import { db } from '../firebase-config';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Detail() {
   const location = useLocation();
   const name = 'asia';

   const [data, setData] = useState([]);
   const [countries, setCountries] = useState([]);
   const [thingsToDo, setThingsToDo] = useState([]);

   useEffect(() => {
      const docRef = db.collection('ContinentName').doc(name);

      docRef
         .get()
         .then((doc) => {
            if (doc.exists) {
               console.log('Document data:', doc.data());
               setData(doc.data());
            } else {
               // doc.data() will be undefined in this case
               console.log('No such document!');
            }
         })
         .catch((error) => {
            console.log('Error getting document:', error);
         });

      const collectionRef = db
         .collection('ContinentName')
         .doc(name)
         .collection('CountryName');
      collectionRef.get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
            if (!countries.id === doc.data().id)
               console.log(querySnapshot.doc());
            setCountries((countries) => [...countries, doc.data()]);
         });
      });

      const thingsToDoCollection = db
         .collection('ContinentName')
         .doc(name)
         .collection('ThingsToDo');
      thingsToDoCollection.get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
            //  if(!countries.id === doc.data().id)
            setThingsToDo((thingsToDo) => [...thingsToDo, doc.data()]);
         });
      });
   }, []);

   console.log(thingsToDo);

   return (
      <div style={{ backgroundColor: 'rgb(253,253,255)' }}>
         {
            <div style={{ width: '80%', margin: 'auto' }}>
               {/* <div style={{backgroundImage: `url(${data.img})`, margin:"auto", height:500, position:"relative"}}>  */}

               <div style={{ display: 'flex', width: '90%', margin: 'auto' }}>
                  <img
                     src={data.img}
                     style={{ padding: 10, borderRadius: '6%' }}
                     height={'600px'}
                     width={'65%'}
                  />
                  {/* align={'right'} */}
                  <div
                     style={{
                        border: '1px solid black',
                        borderRadius: '6%',
                        margin: 30,
                        height: 300,
                        width: 500,
                        padding: 20,
                        backgroundColor: 'black',
                        opacity: 0.8
                     }}
                  >
                     <div style={{ display: 'flex', fontSize: 40 }}>
                        {/* <FontAwesomeIcon
                           icon={faLocationDot}
                           style={{ marginTop: 15, color: 'white' }}
                        /> */}
                        <h1 style={{ marginLeft: 20, color: 'white' }}>
                           {name}
                        </h1>
                     </div>
                     <div
                        style={{
                           border: '0.2px solid white',
                           padding: 10,
                           margin: 30,
                           textAlign: 'center',
                           boxShadow: '1px 1px 2px #dcdcdc'
                        }}
                     >
                        <p style={{ color: 'white', marginBottom: 5 }}>
                           Travelling to {name}
                        </p>
                        <Link
                           to="/plantrip"
                           style={{
                              color: 'white',
                              border: '1px solid white',
                              padding: '2px 10px',
                              backgroundColor: '#696969'
                           }}
                        >
                           Start planning
                        </Link>
                     </div>
                  </div>
               </div>
               {/* </div> */}
               <p style={{ wordSpacing: 'normal', margin: 20 }}>{data.str1}</p>
            </div>
         }
         <div style={{ display: 'flex', margin: 'auto', width: '80%' }}>
            {countries &&
               countries.map((co) => (
                  <div state={{ country: co.name }} style={{ width: '30%' }}>
                     <div
                        class="max-w-sm rounded overflow-hidden shadow-lg"
                        style={{
                           width: '95%',
                           height: '470px',
                           marginBottom: 10
                        }}
                     >
                        <div style={{ padding: 10 }}>
                           <div class="font-bold text-xl mb-2">{co.name}</div>
                           <img src={co.img} />
                           <p class="text-gray-700 text-base">
                              {co.Description}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
         </div>

         <div style={{ width: '80%', margin: 'auto' }}>
            <h2 style={{ fontSize: 45, marginTop: 30 }}>
               Things to do in {name}
            </h2>
            <hr style={{ border: '1px solid #dcdcdc' }}></hr>

            <div style={{ display: 'flex', flexWrap: 'wrap', flexBasis: 5 }}>
               {thingsToDo &&
                  thingsToDo.map((thing) => (
                     <div
                        className="wrapper antialiased text-gray-900"
                        style={{ margin: 50 }}
                     >
                        <div>
                           <img
                              src={thing.img}
                              alt=" random imgee"
                              className="object-cover object-center rounded-lg shadow-md"
                              style={{ width: 300, height: 200 }}
                           />

                           <div
                              className="bg-white p-1 rounded-lg shadow-lg relative px-4 -mt-3"
                              style={{ width: 300 }}
                           >
                              <span
                                 className="text-gray-600 text-sm"
                                 style={{ fontWeight: 'bold', width: 300 }}
                              >
                                 {' '}
                                 {thing.thing}
                              </span>
                           </div>
                        </div>
                     </div>
                     // </div>
                  ))}
            </div>
         </div>
      </div>
   );
}
