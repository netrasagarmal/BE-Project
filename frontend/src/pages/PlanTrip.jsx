import { useState } from 'react';
import './pagebg.css';

export default function PlanTrip() {
   const [inputFields, setInputFields] = useState([
      { whereDoUWanaGo: '', startCity: '', endCity: '' }
   ]);

   const handleChangeInput = (index, event) => {
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;
      setInputFields(values);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('InputFileds', inputFields);
   };

   return (
      <section className="h-screen flex justify-center items-center w-full bg-gray-300">
         <div className="">
            <div className="my-3.5">
               <h1 className="text-4xl font-bold text-center py-1.5 ">
                  Build Your Own Customized Trip Plan
               </h1>
               <p>
                  Create your travel itinerary. Book your accommodation, tours &
                  flights as a package online.
               </p>
            </div>
            <form className="mt-8" onSubmit={handleSubmit}>
               {inputFields.map((inputField, index) => (
                  <label>
                     <input
                        className="border-solid rounded p-2 min-w-full shadow outline-none"
                        type="text"
                        name="whereDoUWanaGo"
                        placeholder="Where do you want to go?"
                        value={inputField.whereDoUWanaGo}
                        onChange={(event) => handleChangeInput(index, event)}
                     />
                     <input
                        className="border-solid rounded p-2 min-w-full shadow outline-none mt-1.5"
                        type="text"
                        name="startCity"
                        placeholder="Start City"
                        value={inputField.startCity}
                        onChange={(event) => handleChangeInput(index, event)}
                     />
                     <input
                        className="border-solid rounded p-2 min-w-full shadow outline-none mt-1.5"
                        type="text"
                        name="endCity"
                        placeholder="End City"
                        value={inputField.endCity}
                        onChange={(event) => handleChangeInput(index, event)}
                     />
                  </label>
               ))}

               <div className="flex">
                  <button
                     type="submit"
                     onClick={handleSubmit}
                     className="border-solid transition duration-200 ease-in-out bg-white hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-110 rounded bg-white mx-auto p-1.5 m-4 w-20 shadow"
                  >
                     Next
                  </button>
               </div>
            </form>
         </div>
      </section>
   );
}
