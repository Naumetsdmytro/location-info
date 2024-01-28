import { getItemFromStorage } from "../shared"
import {useEffect} from "react";

// const api = 'l3X3aMFHj6CBqM97uul8SNcYiwOhwBqmgWJUIsTmAVI'

export const Main = () => {
  const user = getItemFromStorage('userData').user

  // useEffect(() => {
//   async function fetchPlaces() {
//     const response = await fetch(`https://discover.search.hereapi.com/v1/
// discover
// ?at=52.5228,13.4124
// &q=petrol+station
// &apiKey=${api}`)
//     const data = await response.json();
//
//     console.log(data);
//   }
//
//   fetchPlaces();
// }, []);

  return (
     <div>
       <h1>Main</h1>
       <h3>Welcome {user.fullName}</h3>
     </div>
  )
}

