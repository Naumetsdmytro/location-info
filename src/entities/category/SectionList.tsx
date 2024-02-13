import {
	Box,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MuseumIcon from '@mui/icons-material/Museum';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CoffeeIcon from '@mui/icons-material/Coffee';
import AttractionsIcon from '@mui/icons-material/Attractions';
import { SectionItem } from './SectionItem';

export function SectionList() {
	const categories = [
		{ icon: <HotelIcon />, text: 'Hotels' },
		{ icon: <StorefrontIcon />, text: 'Stores' },
		{ icon: <RestaurantIcon />, text: 'Restaurants' },
		{ icon: <MuseumIcon />, text: 'Museums' },
		{ icon: <LocalHospitalIcon />, text: 'Hospitals' },
		{ icon: <FitnessCenterIcon />, text: 'Gyms' },
		{ icon: <CoffeeIcon />, text: 'Cafes' },
		{ icon: <AttractionsIcon />, text: 'Attractions' },
	];

	return (
		<Box
			sx={{
				flexGrow: 1,
				paddingTop: '100px',
				paddingX: '60px'
			}}
		>
			<Typography
				component="h2"
				gutterBottom
				variant="h5"
				sx={{
					fontSize: '2rem',
				}}
			>
				Recommended Categories
			</Typography>
			<Grid container spacing={2}>
				{categories.map((category, index) => (
					<SectionItem
						icon={category.icon}
						key={index}
						text={category.text}
					/>
				))}
			</Grid>
		</Box>
	);
}
