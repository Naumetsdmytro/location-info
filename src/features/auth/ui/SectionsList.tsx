import { Grid, Typography, Box } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MuseumIcon from '@mui/icons-material/Museum';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import { SectionListItem } from "./SectionsListItem"

export function SectionsList() {
  const categories = [
    { icon: <HotelIcon />, text: 'Hotels' },
    { icon: <StorefrontIcon />, text: 'Stores' },
    { icon: <RestaurantIcon />, text: 'Restaurants' },
    { icon: <MuseumIcon />, text: 'Museums' },
    { icon: <LocalHospitalIcon />, text: 'Hospitals' },
    { icon: <FitnessCenterIcon />, text: 'Gyms' },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Recommended Categories
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
            <SectionListItem key={index} text={category.text} icon={category.icon} />
        ))}
      </Grid>
    </Box>
  );
}

