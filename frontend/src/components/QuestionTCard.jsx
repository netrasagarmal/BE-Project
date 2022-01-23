import { useState } from 'react';
// export const Questions = ({ editorStatus, setEditorStatus }) => {
//    return (
//       <div>
//          <Solo
//             label={'Solo'}
//             updateStatus={'SOLO'}
//             currentStatus={editorStatus}
//             onClickHandler={setEditorStatus}
//          />

//          <Friends
//             label={'Friends'}
//             updateStatus={'FRIENDS'}
//             currentStatus={editorStatus}
//             onClickHandler={setEditorStatus}
//          />
//       </div>
//    );
// };

export const Solo = () => {
   return (
      <div className="flex justify-evenly content-center rounded m-1 p-3">
         <div className="flex justify-evenly flex-col m-1">
            <div className="flex items-center text-centre justify-center">
               <i className="bx bx-male-sign text-blue-900" />
               <h1 className="">Male</h1>
            </div>
            <div className="flex mt-2">
               <p className="rounded-full shadow-outline px-2.5 py-1.5 bg-gray-200 mx-1.5 bg-white ">
                  18 - 30
               </p>
               <p className="rounded-full shadow-outline px-2.5 py-1.5 bg-gray-200 mx-1.5 bg-white ">
                  31 - 50
               </p>
               <p className="rounded-full shadow-outline px-2.5 py-1.5 bg-gray-200 mx-1.5 bg-white ">
                  51 & Above
               </p>
            </div>
         </div>

         <div className="flex justify-evenly flex-col p-1.5">
            <div className="flex items-center text-centre justify-center">
               <i className="bx bx-female-sign text-blue-900" />
               <h2>Female</h2>
            </div>
            <div className="flex mt-2">
               <p className="rounded-full shadow-outline px-2.5 py-1.5 bg-gray-200 mx-1.5 bg-white ">
                  18 - 30
               </p>
               <p className="rounded-full shadow-outline px-2.5 py-1.5 bg-gray-200 mx-1.5 bg-white ">
                  31 - 50
               </p>
               <p className="rounded-full shadow-outline px-2.5 py-1.5 bg-gray-200 mx-1.5 bg-white ">
                  51 & Above
               </p>
            </div>
         </div>
      </div>
   );
};

export const Friends = () => {
   return (
      <div className="flex justify-center m-2">
         <p className="rounded-full shadow-outline px-2.5 py-1.5 bg-gray-200 mx-1.5 bg-white ">
            18 - 30
         </p>
         <p className="rounded-full shadow-outline px-2.5 py-1.5 bg-gray-200 mx-1.5 bg-white ">
            31 - 50
         </p>
         <p className="rounded-full shadow-outline px-2.5 py-1.5 bg-gray-200 mx-1.5 bg-white ">
            51 & Above
         </p>
      </div>
   );
};

export const Family = () => {
   const [counterAdult, setCounterAdult] = useState(0);
   const [counterKid, setCounterKid] = useState(0);

   // Function is called everytime increment button is clicked
   const incrementAdult = () => {
      // Counter state is incremented
      setCounterAdult(counterAdult + 1);
   };

   // Function is called everytime decrement button is clicked
   const decrementAdult = () => {
      // Counter state is decremented
      setCounterAdult(counterAdult - 1);
   };

   // Function is called everytime increment button is clicked
   const incrementKid = () => {
      // Counter state is incremented
      setCounterKid(counterKid + 1);
   };

   // Function is called everytime decrement button is clicked
   const decrementKid = () => {
      // Counter state is decremented
      setCounterKid(counterKid - 1);
   };

   return (
      <div className="flex items-center justify-center flex-col mb-6">
         <div className="flex px-4 py-8 m-3 bg-gray-200 rounded shadow-md">
            <img src="https://img.icons8.com/ios/50/000000/old-man.png" />
            <div className="flex flex-col justify-center items-center px-8">
               <p>Adults</p>
               <p>(16 + years)</p>
            </div>
            <div className="flex justify-center items-center px-2">
               <i className="bx bx-minus-circle" onClick={decrementAdult}></i>
               <p className="px-2.5">{counterAdult}</p>
               <i className="bx bx-plus-circle" onClick={incrementAdult}></i>
            </div>
         </div>

         <div className="flex px-4 py-8 m-3 bg-gray-200 rounded shadow-md">
            <img src="https://img.icons8.com/ios/50/000000/babys-room.png" />
            <div className="flex flex-col justify-center items-center px-8">
               <p>Kids</p>
               <p>(0-16 years)</p>
            </div>
            <div className="flex justify-center items-center px-2">
               <i className="bx bx-minus-circle " onClick={decrementKid}></i>
               <p className="px-2.5">{counterKid}</p>
               <i
                  className="bx bx-plus-circle text-3xl"
                  onClick={incrementKid}
               ></i>
            </div>
         </div>
      </div>
   );
};
