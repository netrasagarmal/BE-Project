import { React, useState, useRef, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';

export const Modal = (props) => {
   const { onOpen, onClose, children } = props;

   return (
      <Dialog open={onOpen} onClose={onClose}>
         {children}
      </Dialog>
   );
};
