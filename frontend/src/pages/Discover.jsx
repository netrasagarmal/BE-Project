// import './pagebg.css';
import { continentData } from './continent-data/continentData.js';

export default function Discover() {
    return(
        // <div className="home-bg h-full bg-center bg-no-repeat bg-cover">
        <div>
            {/* <img src='/bg-image.jpg' alt="Mountains" /> */}

            <h1 className="pt-16">
                Discover
            </h1>

            <h1>Explore continents</h1>

             { 
                 continentData.map(data=>(
                     <div>
                     <img src={data.image} />
                     <h4>{data.name}</h4>
                     </div>
                 ))
             }

          </div>
    )
}