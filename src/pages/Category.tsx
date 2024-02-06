import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PlaceData } from './model/models';
import { Box, Paper, Typography } from '@mui/material';
import ReactDOMServer from 'react-dom/server';

const api = 'l3X3aMFHj6CBqM97uul8SNcYiwOhwBqmgWJUIsTmAVI';

const customMarkerIcon = "https://i.ibb.co/wY1BXfK/location-Icon.png";
const customMarkerIcon2x = "https://i.ibb.co/L5QYtj1/big-Location-Icon.png";

const customIcon = L.icon({
  iconRetinaUrl: customMarkerIcon2x,
  iconUrl: customMarkerIcon,
  iconSize: [30, 30],
});

export const Category = () => {
  const [places, setPlaces] = useState<PlaceData[]>([]);
  const { categoryName } = useParams();
  const mapRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: [49.0119, 24.3731],
      zoom: 12,
    });

    const hereTileUrl = `https://{s}.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=${api}&ppi=320`;
    const hereTiles = L.tileLayer(hereTileUrl, {
      subdomains: '1234',
      attribution: 'Map &copy; 1987-2024 <a href="http://developer.here.com">HERE</a>',
    });

    hereTiles.addTo(map);

    async function fetchPlaces() {
      const response = await fetch(
        `https://discover.search.hereapi.com/v1/discover?at=49.0119,24.3731&q=${categoryName}&apiKey=${api}`
      );
      const { items } = await response.json();

      console.log(items)

      const uniqueLngs = new Set();

      const uniqueItems = items.filter((item: PlaceData) => {
        const lng = item.position.lng;

        if (!uniqueLngs.has(lng)) {
          uniqueLngs.add(lng);
          return true;
        }

        return false;
      });

      setPlaces(uniqueItems);

      uniqueItems.forEach((item: PlaceData) => {
        const popupContent = ReactDOMServer.renderToString(
              <Paper style={{ padding: '8px', borderRadius: '4px' }} elevation={3}>
                <Typography variant="subtitle1" component="strong">
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.address.label}</Typography>
                <Typography variant="body2">Distance: {item.distance}m</Typography>
              </Paper>
          );

        const marker = L.marker([item.position.lat, item.position.lng], { icon: customIcon }).addTo(map);
        marker.bindPopup(popupContent);
      });
    }

    fetchPlaces();

    map.locate({ setView: true, maxZoom: 16 });
    map.on('locationfound', function (e) {
      L.marker(e.latlng).addTo(map)
        .bindPopup("You are here!");
    });

    return () => {
      map.off('locationfound');
      map.remove();
    };
  }, []);

  return <Box ref={mapRef} sx={{ height: 500, width: '80%', margin: '0 auto' }} />;
};
