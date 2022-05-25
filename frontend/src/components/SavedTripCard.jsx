import { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

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

export const FullScreenCard = ({ value }) => {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <Button
            className="w-1/2 rounded border-2 border-blue-500 border-solid"
            onClick={handleClickOpen}
         >
            Ontario
         </Button>
         <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
         >
            <AppBar sx={{ position: 'relative' }}>
               <Toolbar>
                  <IconButton
                     edge="start"
                     color="inherit"
                     onClick={handleClose}
                     aria-label="close"
                  >
                     <CloseIcon />
                  </IconButton>
                  <Typography
                     sx={{ ml: 2, flex: 1 }}
                     variant="h6"
                     component="div"
                  >
                     Ontario
                  </Typography>
               </Toolbar>
            </AppBar>
            <Typography>
               {value &&
                  value.length > 0 &&
                  value.map((value) => {
                     return (
                        <div className="flex justify-center">
                           <div className="text-center w-1/2">
                              {/* <p className="flex mx-4">{index + 1}</p> */}
                              <div className="p-4 m-2.5 bg-gray-200 rounded shadow">
                                 <p className="m-1">
                                    {console.log(value.image)}
                                    Name:{' '}
                                    {camelize(value.name.split('_').join(' '))}
                                 </p>
                                 <p className="m-1">
                                    Location: {value.location}
                                 </p>
                                 <p className="m-1">Price: {value.price}</p>
                                 <p className="m-1">Rating: {value.rating}</p>
                                 <p className="m-1">
                                    Category:{' '}
                                    {camelize(
                                       value.category.split('_').join(' ')
                                    )}
                                 </p>
                              </div>
                           </div>
                        </div>
                     );
                  })}
            </Typography>
         </Dialog>
      </div>
   );
};
