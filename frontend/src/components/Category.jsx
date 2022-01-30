export const Category = ({ value, selected }) => {
   console.log(selected);
   return (
      <div
         className={`${
            selected ? 'bg-red-500' : 'bg-blue-200'
         } p-2.5 m-2 h-4/5 flex justify-center items-center cursor-pointer shadow rounded`}
      >
         <p className="font-semibold text-center p-6">{value}</p>
      </div>
   );
};
