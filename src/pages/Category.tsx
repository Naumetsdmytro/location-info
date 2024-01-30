import {useEffect, useState} from "react";
import { useParams } from "react-router";

import { PlaceData } from "../features/auth/model/models";

const api = 'l3X3aMFHj6CBqM97uul8SNcYiwOhwBqmgWJUIsTmAVI'

export const Category = () => {
  const [places, setPlaces] = useState<PlaceData[]>([])

  const { categoryName } = useParams()

  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch(
        `https://discover.search.hereapi.com/v1/discover?in=circle:49.0118700,24.3730800;r=15000&q=${categoryName}&apiKey=${api}`
      );
      const { items } = await response.json();

      console.log(items)

      setPlaces(items)
    }

    fetchPlaces();
  }, []);

  return (
    <div>
      <ul>
        {places.map(place => {
          return <li style={{marginBottom: "20px"}}>
            <h3 key={place.id}>{place.title}</h3>
            <p>{place.address.label}</p>
          </li>
        })}
      </ul>
    </div>
  )
}