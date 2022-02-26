import { useState } from 'react';
import axios from 'axios';
import './pagebg.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
   BannerCarousel,
   Solo,
   Friends,
   Family,
   Category,
   Rating
} from '../components';
import Slider from '@mui/material/Slider';
import format from 'date-fns/format';
import { useNavigate } from 'react-router-dom';
// import group from '../images/Travel Card/group.png';
// import Couple from '../images/Travel Card/couple.png';
// import FamilyPic from '../images/Travel Card/familypic.png';
// import soloPerson from '../images/Travel Card/soloPerson.png';

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
   //---------------------First 3 input-------------------
   // const [inputFields, setInputFields] = useState([
   //    { whereDoUWanaGo: '', startCity: '', returnCity: '' }
   // ]);

   // const handleChangeInput = (index, event) => {
   //    const values = [...inputFields];
   //    values[index][event.target.name] = event.target.value;
   //    setInputFields(values);
   // };

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    console.log('InputFileds', inputFields);
   // };

   //----------------------Store select Date---------------------------
   const [dateRange, setDateRange] = useState([null, null]);
   const [startDate, endDate] = dateRange;
   const [tripStatus, setTripStatus] = useState(null);
   const [budgetValue, setBudgetValue] = useState([0, 2000]);
   const [selection, setSelection] = useState([]);
   const [startCity, setStartCity] = useState('');
   const [returnCity, setreturnCity] = useState('');
   const [destinationCity, setDestinationCity] = useState('');
   // const [rating, setRating] = useState([]);
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

   const postData = async () => {
      const data = {
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
      try {
         const response = await axios.post(
            'http://127.0.0.1:8000/attrec/',
            data
         );
         if (response.data) {
            navigate('/result');
         }
      } catch (error) {
         console.log(error);
      }

      // axios
      //    .post('http://127.0.0.1:8000/attrec/', data)
      //    .then((response) => {
      //       backendData = response.data;
      //       console.log(backendData);
      //       console.log('Status: ', response.status);
      //       console.log('Data: ', response.data);
      //    })
      //    .catch((error) => {
      //       console.error('Something went wrong!', error);
      //    });
   };

   // const [tCard, setTCard] = useState([
   //    { id: 1, type: 'Solo', url: Solo },
   //    { id: 2, type: 'Couple', url: Couple },
   //    { id: 3, type: 'Family', url: Family },
   //    { id: 4, type: 'Friends', url: Friends }
   // ]);

   // const tCardHandler = (id, isVisible) => {
   //    setTCard((prevTCard) => [
   //       ...prevTCard.map((tCard) => {
   //          if (tCard.id === id) {
   //             tCard.isVisible = !isVisible;
   //          }
   //          return tCard;
   //       })
   //    ]);
   // };

   return (
      <>
         <div className="flex flex-col h-full">
            {/* //--------------------------Carousel div------------------------ */}
            <div className="w-full min-h-0 p-3">
               <BannerCarousel />
            </div>

            {/* //--------------------------PlanTrip div------------------------ */}
            <div className="border-solid outline-none rounded p-3">
               <div className="max-h-screen">
                  <div>
                     <form className="p-3">
                        <div className=" mt-1.5">
                           <p className="font-medium text-base">
                              Where do you want to go?
                           </p>
                           <input
                              name="whereDoUWanaGo"
                              type="text"
                              placeholder="Where do you want to go?"
                              onChange={(e) =>
                                 setDestinationCity(e.target.value)
                              }
                              className="border border-gray-400 border-dashed rounded p-2 w-full m-1.5 focus:border-black outline-none"
                           />
                        </div>

                        <div className="flex mt-1.5">
                           <div className="w-1/2 mt-1.5 mr-4">
                              <p className="font-medium text-base">
                                 Start City
                              </p>
                              <input
                                 name="startCity"
                                 type="text"
                                 placeholder="Start City"
                                 onChange={(e) => setStartCity(e.target.value)}
                                 className="border border-gray-400 border-dashed w-full rounded p-2 mx-2 focus:border-black outline-none mt-1.5"
                              />
                           </div>

                           <div className="w-1/2 mt-1.5">
                              <p className="font-medium text-base">End City</p>
                              <input
                                 type="text"
                                 name="returnCity"
                                 placeholder="End City"
                                 onChange={(e) => setreturnCity(e.target.value)}
                                 className="border border-gray-400 border-dashed w-full rounded p-2 mx-2 focus:border-black outline-none mt-1.5"
                              />
                           </div>
                        </div>

                        <div className="w-auto mt-1.5">
                           <p className="font-medium text-base">Select Date</p>
                           <DatePicker
                              className="border border-gray-400 border-dashed rounded w-full p-2 mx-1.5 focus:border-black border-dashed outline-none mt-1.5"
                              selectsRange={true}
                              startDate={startDate}
                              endDate={endDate}
                              onChange={(update) => {
                                 setDateRange(update);
                              }}
                              placeholderText="Select Date"
                           />
                        </div>

                        <div className="w-auto mt-1.5 flex flex-col justify-between">
                           <p className="font-medium text-base">Budget</p>
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

                        <div className="">
                           <p className="font-medium text-base">
                              Select At-least 5 Categories
                           </p>

                           <div className="grid grid-cols-4 p-4">
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
                           <div className="flex justify-center flex-wrap">
                              {selection.length >= 5 &&
                                 selection.map((item) => {
                                    return (
                                       <div key={item.id}>
                                          <Rating value={item.value} />
                                       </div>
                                    );
                                 })}
                           </div>

                           {/* <p className="font-medium text-sm">
                              Who are you travelling with?
                           </p> */}

                           {/* <div className="flex items-center justify-center mt-1.5">
                              <div
                                 onClick={() => setTripStatus('SOLO')}
                                 className="rounded-lg h-28 active:border active:border-solid active:border-blue-300 border bg-gray-200  m-1.5 p-1.5 w-full overflow-hidden shadow-md flex flex-col justify-center items-center"
                              >
                                 <img
                                    className="h-auto m-1.5"
                                    src={soloPerson}
                                    alt="Wandering Solo"
                                 />

                                 <p className="text-center font-medium px-2 pb-2">
                                    Wandering Solo
                                 </p>
                              </div>

                              <div className="rounded-lg bg-gray-200 h-28 border-2 border-solid outline-none focus:border-blue-700  m-1.5 p-1.5 w-full overflow-hidden shadow-md flex flex-col justify-center items-center">
                                 <img
                                    className="h-auto m-1.5"
                                    src={Couple}
                                    alt="Holidaying as a Couple"
                                 />

                                 <p className="text-center font-medium px-2 pb-2">
                                    Holidaying as a Couple
                                 </p>
                              </div>

                              <div
                                 onClick={() => setTripStatus('FAMILY')}
                                 className="rounded-lg h-28 border-2 border-solid outline-none focus:border-blue-700 bg-gray-200  m-1.5 p-1.5 w-full overflow-hidden shadow-md flex flex-col justify-center items-center"
                              >
                                 <img
                                    className="h-auto m-1.5"
                                    src={FamilyPic}
                                    alt="Vactioning with Family"
                                 />

                                 <p className="text-center font-medium px-2 pb-2">
                                    Vactioning with Family
                                 </p>
                              </div>

                              <div
                                 onClick={() => setTripStatus('FRIENDS')}
                                 className="rounded-lg h-28 border-2 border-solid outline-none focus:border-blue-700  bg-gray-200 m-1.5 p-1.5 w-full overflow-hidden shadow-md flex flex-col justify-center items-center"
                              >
                                 <img
                                    className="h-auto m-1.5"
                                    src={group}
                                    alt="Traveling with Friends"
                                 />

                                 <p className="text-center font-medium px-2 pb-2">
                                    Traveling with Friends
                                 </p>
                              </div>
                           </div> */}

                           {/* <TravelCard tCard={tCard} tCardHandler={tCardHandler} /> */}
                        </div>
                     </form>
                  </div>
                  {tripStatus === 'SOLO' && <Solo />}
                  {tripStatus === 'FRIENDS' && <Friends />}
                  {tripStatus === 'FAMILY' && <Family />}
                  <div className="flex justify-center p-3">
                     <button
                        onClick={() => postData()}
                        className="rounded shadow-md bg-gray-300 p-2 w-min"
                     >
                        Submit
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
