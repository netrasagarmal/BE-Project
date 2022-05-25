export const Category = ({ value, selected }) => {
   // console.log('here', selected);
   return (
      <div
         className={`${
            selected ? 'border-gray-900 shadow-md hover:border-gray-900' : ''
         } border-solid rounded-md bg-gray-200 p-2.5 hover:border-gray-400 border-2  m-2 h-4/5 flex justify-center items-center cursor-pointer shadow rounded`}
      >
         <p className="font-semibold text-center p-6">{value}</p>
      </div>
   );
};
