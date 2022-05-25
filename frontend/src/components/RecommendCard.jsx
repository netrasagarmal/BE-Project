function camelize(str) {
   // Split the string at all space characters
   return (
      str
         .split(' ')
         // get rid of any extra spaces using trim
         .map((a) => a.trim())
         // Convert first char to upper case for each word
         .map((a) => a[0].toUpperCase() + a.substring(1))
         // Join all the strings back together
         .join(' ')
   );
}

export const RecommendCard = ({ value }) => {
   return (
      <div className="text-center h-2/4 m-auto">
         <div className="p-4 m-2.5 bg-white rounded shadow">
            <p className="m-1">
               {console.log(value.image)}
               Name: {camelize(value.name.split('_').join(' '))}
            </p>
            <p className="m-1">Location: {value.location}</p>
            <p className="m-1">Price: {value.price}</p>
            <p className="m-1">Rating: {value.rating}</p>
            <p className="m-1">
               Category: {camelize(value.category.split('_').join(' '))}
            </p>
         </div>
      </div>
   );
};

export const RestaurantCard = ({ value }) => {
   return (
      <div className="text-center h-2/4 m-auto">
         <div className="p-4 m-2.5 bg-white rounded shadow">
            <p className="m-1">Name: {value.restaurant_name}</p>
            <p className="m-1">Cuisines: {value.cuisines}</p>
            <p className="m-1">Location: {value.location}</p>
            <p className="m-1">Star Rating: {value.starRating}</p>
            <p className="m-1">
               Average Cost For 2 People: {value.averagecostfor2people}
            </p>
         </div>
      </div>
   );
};

export const LocationCard = ({ value }) => {
   return (
      <>
         <section className="mx-2 my-4 p-2.5 flex flex-wrap h-28 bg-white rounded border-solid border-l-4 border-green-400">
            <img
               src="https://firebasestorage.googleapis.com/v0/b/trip-planner-9213c.appspot.com/o/Carousel%20Images%2FGoa.jpg?alt=media&token=ec1295dc-3004-466b-a4cd-ee7a7103e201"
               alt="Image"
               className="w-20 h-20 my-auto justify-center"
            />

            <span className="inline-flex ml-2 flex-col m-auto">
               <span className=" text-xs font-medium">
                  {camelize(value.name.split('_').join(' '))}
               </span>
               <span className="font-semibold text-sm">
                  {'$' + value.price}
               </span>
               <span>{'Rating: ' + value.rating}</span>
            </span>
         </section>
      </>
   );
};

export const HotelCard = () => {
   return (
      <>
         <section className="m-2 p-2.5 flex w-75 h-28 shadow bg-white rounded border-solid border-l-4 border-red-400">
            <img
               src="https://firebasestorage.googleapis.com/v0/b/trip-planner-9213c.appspot.com/o/Carousel%20Images%2FGoa.jpg?alt=media&token=ec1295dc-3004-466b-a4cd-ee7a7103e201"
               alt="Image"
               className="w-20 h-20 m-auto justify-center"
            />

            <span className="inline-flex ml-2 flex-col m-auto">
               <span className=" text-xs font-medium">
                  niagara falls in one day: deluxe sightseeing tour of american
                  and canadian sides"
               </span>
               <span className="font-semibold text-sm">204.42</span>
               <span>5</span>
            </span>
         </section>
      </>
   );
};
