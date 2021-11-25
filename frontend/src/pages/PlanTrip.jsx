import { useState } from 'react';
import './pagebg.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BannerCarousel, Solo, Friends, Family } from '../components';
import group from '../images/Travel Card/group.png';
import Couple from '../images/Travel Card/couple.png';
import FamilyPic from '../images/Travel Card/familypic.png';
import soloPerson from '../images/Travel Card/soloPerson.png';

export default function PlanTrip() {
   //---------------------First 3 input-------------------
   // const [inputFields, setInputFields] = useState([
   //    { whereDoUWanaGo: '', startCity: '', endCity: '' }
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
            <div className="m-1 border-solid outline-none rounded p-3">
               <div className="max-h-screen">
                  <div>
                     <form className="p-3">
                        <div className=" mt-1.5">
                           <p className="font-medium text-sm">
                              Where do you want to go?
                           </p>
                           <input
                              name="whereDoUWanaGo"
                              type="text"
                              placeholder="Where do you want to go?"
                              className="border border-gray-400 border-dashed rounded p-2 w-full m-1.5 focus:border-black outline-none"
                           />
                        </div>

                        <div className="flex justify-between mt-1.5">
                           <div className="w-1/2 mt-1.5 mr-4">
                              <p className="font-medium text-sm">Start City</p>
                              <input
                                 name="startCity"
                                 type="text"
                                 placeholder="Start City"
                                 className="border border-gray-400 border-dashed w-full rounded p-2 mx-2 focus:border-black outline-none mt-1.5"
                              />
                           </div>

                           <div className="w-1/2 mt-1.5">
                              <p className="font-medium text-sm">End City</p>
                              <input
                                 type="text"
                                 name="endCity"
                                 placeholder="End City"
                                 className="border border-gray-400 border-dashed w-full rounded p-2 focus:border-black outline-none mt-1.5"
                              />
                           </div>
                        </div>

                        <div className="w-auto mt-1.5">
                           <p className="font-medium text-sm">Select Date</p>
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

                        <div className="my-2 py-2">
                           <p className="font-medium text-sm">
                              Who are you travelling with?
                           </p>

                           <div className="flex items-center justify-center mt-1.5">
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
                           </div>

                           {/* <TravelCard tCard={tCard} tCardHandler={tCardHandler} /> */}
                        </div>
                     </form>
                  </div>
                  {tripStatus === 'SOLO' && <Solo />}
                  {tripStatus === 'FRIENDS' && <Friends />}
                  {tripStatus === 'FAMILY' && <Family />}
                  <div className="flex justify-center p-3">
                     <button
                        type="submit"
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
