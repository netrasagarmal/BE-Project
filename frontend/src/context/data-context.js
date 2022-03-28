import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase-config';

const dataContext = createContext();

export function DataContextProvider({ children }) {
   const [bannerData, setBannerData] = useState([]);

   function getData() {
      db.collection('carouselData').get().then((docs) => {
         docs.forEach((doc) => {
            setBannerData({...doc.data(), id: doc.id});
         });
     });
     console.log(bannerData);
     return bannerData;
   }

   return(
      <dataContext.Provider value={getData}>
         {children}
      </dataContext.Provider>
   )
}

export function useDataContext() {
   return useContext(dataContext)
}

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//    const [
//       { timeOfDay, image, name, location, price, rating, category },
//       dispatch
//    ] = useReducer(dataReducer, initialState);


//    return (
//       <DataContext.Provider
//          value={{
//             timeOfDay,
//             image,
//             name,
//             location,
//             price,
//             rating,
//             category,
//             dispatch
//          }}
//       >
//          {children}
//       </DataContext.Provider>
//    );
// };

// export const useData = () => useContext(DataContext);