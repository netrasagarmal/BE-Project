export const MapCard = ({ value }) => {
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

   return (
      <div className="text-center">
         <div className="p-4 m-2.5 bg-gray-200 rounded shadow">
            <img className="m-1" src="/" alt="Image" />
            <p className="m-1">
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