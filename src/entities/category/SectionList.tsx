import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import HotelIcon from '@mui/icons-material/Hotel'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import MuseumIcon from '@mui/icons-material/Museum'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import { SectionItem } from './SectionItem'

export function SectionList() {
	const categories = [
		{ icon: <HotelIcon />, text: 'Hotels' },
		{ icon: <StorefrontIcon />, text: 'Stores' },
		{ icon: <RestaurantIcon />, text: 'Restaurants' },
		{ icon: <MuseumIcon />, text: 'Museums' },
		{ icon: <LocalHospitalIcon />, text: 'Hospitals' },
		{ icon: <FitnessCenterIcon />, text: 'Gyms' },
	]

	return (
		<Box sx={{ backgroundColor: '#f5f5f5', flexGrow: 1, padding: 2 }}>
			<Typography
				component="h2"
				gutterBottom
				sx={{ color: '#023e8a', fontSize: '2rem' }}
				variant="h5"
			>
				Recommended Categories
			</Typography>
			<Grid container spacing={2}>
				{categories.map((category, index) => (
					<SectionItem icon={category.icon} key={index} text={category.text} />
				))}
			</Grid>
		</Box>
	)
}
