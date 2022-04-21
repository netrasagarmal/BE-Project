import { React, useState, useRef, useEffect } from 'react';
import { Modal } from './Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const PopularDesCard = (cardData) => {
   const [open, setOpen] = useState(false);
   const [data, setData] = useState();

   const handleClickOpen = (item) => {
      console.log('function', item);
      setData(item);
      setOpen(true);
   };

   console.log(data);

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div className="flex flex-wrap px-14 py-3.5">
         {cardData.value.map((item, index) => {
            return (
               <div
                  onClick={() => handleClickOpen(item)}
                  className="justify-center items-center"
                  key={`${item.value}-${index}`}
               >
                  <section className="block hover:shadow-lg  relative m-4 cursor-pointer max-w-sm bg-gray-300">
                     <img className="" src={item.image} alt="" />
                     <p className="absolute bottom-0 text-center w-full bg-white shadow-xl bg-opacity-40 backdrop-filter backdrop-blur-sm p-1">
                        {item.caption}
                     </p>
                  </section>
               </div>
            );
         })}
         <div>
            {open && data && (
               <Modal onOpen={open} onClose={() => handleClose()}>
                  <DialogTitle className='bg-indigo-50'>{data.caption}</DialogTitle>
                  <hr className='bg-gray-400 w-full h-0.5' />
                  <DialogContent>{data.desc}</DialogContent>
               </Modal>
            )}
         </div>
      </div>
   );
};
