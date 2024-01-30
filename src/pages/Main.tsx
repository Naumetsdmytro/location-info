import { getItemFromStorage } from "../shared"
import {useEffect} from "react";
import { SectionsList } from "../features/auth/ui/SectionsList";

const api = 'l3X3aMFHj6CBqM97uul8SNcYiwOhwBqmgWJUIsTmAVI'

export const Main = () => {

  useEffect(() => {
  async function fetchPlaces() {
    const response = await fetch(
      `https://discover.search.hereapi.com/v1/discover?at=49.0118700,24.3730800&q=hospitals&r=5000&apiKey=${api}&limit=100`
    );
    const data = await response.json();

    console.log(data);
  }

  fetchPlaces();
}, []);

  return (
     <div>
       <SectionsList/>
     </div>
  )
}

