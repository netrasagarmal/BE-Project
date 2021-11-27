import { createContext, useContext, useReducer } from 'react';
import { initialState, dataReducer } from './dataReducer';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(dataReducer, initialState);

   return (
      <DataContext.Provider value={{ game: 'game' }}>
         {children}
      </DataContext.Provider>
   );
};

export const useData = () => useContext(DataContext);

// const [state, dispatch] = useReducer(dataReducer, initialState)
// dispatch({ type: 'ACTION_TYPE', payload: '' });
