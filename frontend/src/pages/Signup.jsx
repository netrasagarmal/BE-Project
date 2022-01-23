import { Slider } from '@mui/material';

export default function Signup() {
   const marks = [
      {
         value: 1,
         label: '1'
      },
      {
         value: 2,
         label: '2'
      },
      {
         value: 3,
         label: '3'
      },
      {
         value: 4,
         label: '4'
      },
      {
         value: 5,
         label: '5'
      }
   ];

   return (
      <div>
         <h1>Signup</h1>

         <div className="w-1/4 m-6">
            <Slider
               aria-label="Rating"
               defaultValue={1}
               valueLabelDisplay="auto"
               step={1}
               marks={marks}
               min={1}
               max={5}
            />
         </div>
      </div>
   );
}
