/*import './pagebg.css';

export default function Discover() {
   return (
      <div className=" h-full bg-center bg-no-repeat bg-cover">
         {/* <img src='/bg-image.jpg' alt="Mountains" /> }

         <h1 className="h-96 home-bg">Discover</h1>
      </div>
   );
}*/

import { useState } from 'react';
import React, { useEffect} from 'react';
import './pagebg.css';


export default function Discover() {
   
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    sayHello(a){

    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="flex justify-center p-3">
                     <button 
                        onClick={() => sayHello("hello")}
                        type="submit"
                        className="rounded shadow-md bg-gray-300 p-2 w-min">
                        Submit
                     </button>
        </div>
      );
    }
}
