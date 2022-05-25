import { useState } from 'react';
import axios from 'axios';
import './pagebg.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Category, Rating } from '../components';
import Slider from '@mui/material/Slider';
import format from 'date-fns/format';
import { useNavigate } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

const categories = [
   {
      id: 1,
      value: 'Private & Custom Tours'
   },
   {
      id: 2,
      value: 'Food, Wine & Nightlife'
   },
   {
      id: 3,
      value: 'Day Trips & Excursions'
   },
   {
      id: 4,
      value: 'Luxury & Special Occasions'
   },
   {
      id: 5,
      value: 'Air, Helicopter & Balloon Tour'
   },
   {
      id: 6,
      value: 'Tours & Sightseeing'
   },
   {
      id: 7,
      value: 'Family Friendly'
   },
   {
      id: 8,
      value: 'Water Sports'
   },
   {
      id: 9,
      value: 'Sightseeing Tickets & Passes'
   },
   {
      id: 10,
      value: 'Holiday & Seasonal Tours'
   },
   {
      id: 11,
      value: 'Recommended Experiences'
   },
   {
      id: 12,
      value: 'Cultural & Theme Tours'
   },
   {
      id: 13,
      value: 'Cruises, Sailing & Water Tours'
   },
   {
      id: 14,
      value: 'Multi-day & Extended Tours'
   },
   {
      id: 15,
      value: 'Shows, Concerts & Sports'
   },
   {
      id: 16,
      value: 'Outdoor Activities'
   },
   {
      id: 17,
      value: 'Walking & Biking Tours'
   },
   {
      id: 18,
      value: 'Transfers & Ground Transport'
   },
   {
      id: 19,
      value: 'Shore Excursions'
   },
   {
      id: 20,
      value: 'Classes & Workshops'
   }
];

export default function PlanTrip() {
   const override = {
      height: '200px',
      position: 'relative',
      margin: '0',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
   };

   //----------------------Store select Date---------------------------
   const [dateRange, setDateRange] = useState([null, null]);
   const [startDate, endDate] = dateRange;
   // const [tripStatus, setTripStatus] = useState(null);
   const [budgetValue, setBudgetValue] = useState([0, 2000]);
   const [selection, setSelection] = useState([]);
   const [startCity, setStartCity] = useState('');
   const [returnCity, setreturnCity] = useState('');
   const [destinationCity, setDestinationCity] = useState('');
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const handleChange = (event, newValue) => {
      setBudgetValue(newValue);
   };

   const isListSelected = (itemID) =>
      selection.some((card) => card.id === itemID);

   const handleSelection = (item) => {
      if (isListSelected(item.id)) {
         const updateSelectedList = selection.filter(
            (list) => list.id !== item.id
         );
         setSelection(updateSelectedList);
      } else {
         setSelection((prevLists) => [...prevLists, item]);
      }
   };

   function valuetext(value) {
      return `${value}°C`;
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      const dataAtt = {
         uName: 'Sagar Patil',

         destinationCity: destinationCity,
         startCity: startCity,
         returnCity: returnCity,

         minBudget: budgetValue[0],
         maxBudget: budgetValue[1],

         startDate: format(startDate, 'yyyy-MM-dd'),
         endDate: format(endDate, 'yyyy-MM-dd'),
         noOfDays: format(endDate - startDate, 'dd'),

         category1: selection[0].value.toLowerCase().split(' ').join('_'),
         cat1Rating: 5,

         category2: selection[1].value.toLowerCase().split(' ').join('_'),
         cat2Rating: 4,

         category3: selection[2].value.toLowerCase().split(' ').join('_'),
         cat3Rating: 3,

         category4: selection[3].value.toLowerCase().split(' ').join('_'),
         cat4Rating: 2,

         category5: selection[4].value.toLowerCase().split(' ').join('_'),
         cat5Rating: 1
      };
      const dataHotel = {
         cty: destinationCity
      };
      try {
         setLoading(true);
         const response1 = await axios.post(
            'http://127.0.0.1:8000/attrec/',
            dataAtt
         );
         const response2 = await axios.post(
            'http://127.0.0.1:8000/htlrec/',
            dataHotel
         );
         setLoading(false);
         if (response1.data && response2.data) {
            navigate('/result');
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <div
            className={`${
               loading ? 'hidden' : 'flex flex-col h-auto planTripbg'
            }`}
         >
            <form
               onSubmit={handleSubmit}
               className="py-3 planTripbgdiv m-16 px-8 bg-white"
            >
               <div className="flex flex-wrap md:flex-nowrap justify-between mt-1.5 ">
                  <div className="flex flex-col w-full">
                     <label className="font-medium text-base">
                        Where do you want to go?
                     </label>
                     <input
                        name="whereDoUWanaGo"
                        type="text"
                        required={true}
                        placeholder="Where do you want to go?"
                        onChange={(e) => setDestinationCity(e.target.value)}
                        className="border border-gray-400 border-dashed rounded p-2 focus:border-black outline-none mt-1.5"
                     />
                  </div>

                  <div className="flex flex-col w-full md:mx-4 mx-0">
                     <label className="font-medium text-base">Start City</label>
                     <input
                        name="startCity"
                        type="text"
                        required={true}
                        placeholder="Start City"
                        onChange={(e) => setStartCity(e.target.value)}
                        className="border border-gray-400 border-dashed rounded p-2 focus:border-black outline-none mt-1.5"
                     />
                  </div>

                  <div className="flex flex-col w-full">
                     <label className="font-medium text-base">End City</label>
                     <input
                        type="text"
                        name="returnCity"
                        required={true}
                        placeholder="End City"
                        onChange={(e) => setreturnCity(e.target.value)}
                        className="border border-gray-400 border-dashed rounded p-2 focus:border-black outline-none mt-1.5"
                     />
                  </div>
               </div>

               <div className="flex mt-3 justify-between">
                  <div className="flex flex-col w-full mr-4">
                     <label className="font-medium text-base">
                        Select Date
                     </label>
                     <DatePicker
                        className="border border-gray-400 border-dashed rounded p-2 w-full focus:border-black border-dashed outline-none mt-1.5"
                        selectsRange={true}
                        startDate={startDate}
                        required={true}
                        endDate={endDate}
                        onChange={(update) => {
                           setDateRange(update);
                        }}
                        placeholderText="Select Date"
                     />
                  </div>

                  <div className="flex flex-col w-full">
                     <label className="font-medium text-base">
                        Budget (USD)
                     </label>
                     <div className="px-6 mt-8">
                        <Slider
                           getAriaLabel={() => 'Price range'}
                           value={budgetValue}
                           onChange={handleChange}
                           min={0}
                           valueLabelDisplay="on"
                           max={10000}
                           getAriaValueText={valuetext}
                        />
                     </div>
                  </div>
               </div>

               <div className="">
                  <label className="font-medium text-base">
                     Select At-least 5 Categories
                  </label>

                  <div className="grid grid-cols-3 md:grid-cols-5 mt-4">
                     {categories.map((item, index) => {
                        return (
                           <div
                              key={item.id}
                              onClick={() => handleSelection(item)}
                           >
                              <Category
                                 key={`${item.value}-${index}`}
                                 value={item.value}
                                 selected={isListSelected(item.id)}
                              />
                           </div>
                        );
                     })}
                  </div>
                  <div className="flex justify-evenly my-4 flex-wrap">
                     {selection.length >= 5 &&
                        selection.map((item) => {
                           return (
                              <div key={item.id}>
                                 <Rating value={item.value} />
                              </div>
                           );
                        })}
                  </div>

                  <section className="flex justify-center">
                     {' '}
                     <button className="rounded shadow-md hover:text-white hover:bg-black bg-gray-300 p-2 w-20">
                        Submit
                     </button>
                  </section>
               </div>
            </form>
         </div>
         <HashLoader
            color={'#000000'}
            loading={loading}
            css={override}
            size={100}
            speedMultiplier={1}
         />
      </>
   );
}
