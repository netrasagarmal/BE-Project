import { useState } from 'react';

export const TravelCard = ({ tCard, tCardHandler }) => {
   const [editorState, setEditorState] = useState(null);

   return (
      <div className="flex mt-1.5">
         {tCard.map(({ id, type, url }) => (
            <div
               onClick={() => tCardHandler(id)}
               className="rounded-lg border-solid sm:w-52 bg-white m-2 p-1.5 w-full overflow-hidden shadow-md flex flex-col justify-center items-center"
            >
               <img className="h-12 w-12 m-1.5" src={url} alt="" />
               <p className="text-center font-medium p-2">{type}</p>
            </div>
         ))}

         <div></div>
      </div>
   );
};
