import { Slider } from '@mui/material';

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

export const Rating = ({ value }) => {
   return (
      <div className=" border-2 px-4 rounded m-2 border-gray-300 border-dashed">
         <p className="">{value}</p>
         <Slider
            className=""
            aria-label="Rating"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={1}
            max={5}
         />
      </div>
   );
};
