import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import './pagebg.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BannerCarousel } from '../components';
import { TravelCard } from '../components';
import Friends from '../images/Travel Card/friends.png';
import Couple from '../images/Travel Card/couple.png';
import Family from '../images/Travel Card/family.png';
import Solo from '../images/Travel Card/solo.png';

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

   const [editorStatus, setEditorStatus] = useState(null);

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
      <div className="flex bg-blue-100 h-full">
         {/* //--------------------------Carousel div------------------------ */}
         <div className="w-3/5 relative h-full p-3">
            <BannerCarousel />
         </div>

         {/* //--------------------------PlanTrip div------------------------ */}
         <div className="w-2/5 shadow border-solid outline-none bg-blue-200 rounded-l-lg p-3">
            <div className="max-h-screen overflow-y-scroll">
               <Formik>
                  <Form className="p-3">
                     <div className=" mt-1.5">
                        <p className="font-medium text-sm">
                           Where do you want to go?
                        </p>
                        <Field
                           name="whereDoUWanaGo"
                           type="text"
                           placeholder="Where do you want to go?"
                           className="border-solid rounded p-2 w-full mx-1.5 shadow outline-none mt-1.5"
                        />
                     </div>

                     <div className="flex justify-between mt-1.5">
                        <div className="w-auto mt-1.5">
                           <p className="font-medium text-sm">Start City</p>
                           <Field
                              name="startCity"
                              type="text"
                              placeholder="Start City"
                              className="border-solid rounded p-2 mx-2 shadow outline-none mt-1.5"
                           />
                        </div>

                        <div className="w-auto mt-1.5">
                           <p className="font-medium text-sm">End City</p>
                           <Field
                              type="text"
                              name="endCity"
                              placeholder="End City"
                              className="border-solid rounded p-2 shadow outline-none mt-1.5"
                           />
                        </div>
                     </div>

                     <div className="w-auto mt-1.5">
                        <p className="font-medium text-sm">Select Date</p>
                        <DatePicker
                           className="border-solid rounded w-full p-2 mx-1.5 shadow outline-none mt-1.5"
                           selectsRange={true}
                           startDate={startDate}
                           endDate={endDate}
                           onChange={(update) => {
                              setDateRange(update);
                           }}
                           placeholderText="Select Date"
                        />
                     </div>

                     <div className="mt-1.5">
                        <p className="font-medium text-sm">
                           Who are you travelling with?
                        </p>

                        <div className="flex mt-1.5">
                           <div className="rounded-lg border-solid sm:w-52 bg-white m-1.5 p-1.5 w-full overflow-hidden shadow-md flex flex-col justify-center items-center">
                              <img
                                 className="h-auto m-1.5"
                                 src={Solo}
                                 alt="Wandering Solo"
                              />

                              <p className="text-center font-medium px-2 pb-2">
                                 Wandering Solo
                              </p>
                           </div>

                           <div className="rounded-lg border-solid sm:w-52 bg-white m-1.5 p-1.5 w-full overflow-hidden shadow-md flex flex-col justify-center items-center">
                              <img
                                 className="h-auto m-1.5"
                                 src={Couple}
                                 alt="Holidaying as a Couple"
                              />

                              <p className="text-center font-medium px-2 pb-2">
                                 Holidaying as a Couple
                              </p>
                           </div>

                           <div className="rounded-lg border-solid sm:w-52 bg-white m-1.5 p-1.5 w-full overflow-hidden shadow-md flex flex-col justify-center items-center">
                              <img
                                 className="h-auto m-1.5"
                                 src={Family}
                                 alt="Vactioning with Family"
                              />

                              <p className="text-center font-medium px-2 pb-2">
                                 Vactioning with Family
                              </p>
                           </div>

                           <div className="rounded-lg border-solid sm:w-52 bg-white m-1.5 p-1.5 w-full overflow-hidden shadow-md flex flex-col justify-center items-center">
                              <img
                                 className="h-auto m-1.5"
                                 src={Friends}
                                 alt="Traveling with Friends"
                              />

                              <p className="text-center font-medium px-2 pb-2">
                                 Traveling with Friends
                              </p>
                           </div>
                        </div>

                        {/* <TravelCard tCard={tCard} tCardHandler={tCardHandler} /> */}
                     </div>
                  </Form>
               </Formik>
            </div>
         </div>
      </div>
   );
}
