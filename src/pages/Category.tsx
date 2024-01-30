import { getItemFromStorage } from "../shared"
import {useEffect} from "react";
import { SectionsList } from "../features/auth/ui/SectionsList";
import { useParams } from "react-router";

const api = 'l3X3aMFHj6CBqM97uul8SNcYiwOhwBqmgWJUIsTmAVI'

export const Category = () => {
    const { categoryName } = useParams()

  useEffect(() => {
  async function fetchPlaces() {
    const response = await fetch(
      `https://discover.search.hereapi.com/v1/discover?in=circle:49.0118700,24.3730800;r=15000&q=${categoryName}&apiKey=${api}`
    );
    const data = await response.json();

    console.log(data);
  }

  fetchPlaces();
}, []);

  return (
     <div>
        <p>{categoryName}</p>
       <SectionsList/>
     </div>
  )
}

