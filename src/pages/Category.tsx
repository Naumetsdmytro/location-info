import {useEffect, useState} from "react";
import { useParams } from "react-router";
import { Box, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { PlaceData } from './model/models'

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

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {categoryName}
      </Typography>
      <animated.ul style={fade}>
        {places && places.map(place => (
          <Box key={place.id} sx={{ my: 1, p: 2, border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}>
            <Typography variant="h6">{place.title}</Typography>
            <Typography variant="body2">{place.address.label}</Typography>
          </Box>
        ))}
      </animated.ul>
    </Box>
  );
};