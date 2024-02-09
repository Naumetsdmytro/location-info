import React, { useEffect, useRef, useState } from 'react'
import { Box, Divider, List, ListItem, ListItemText, Paper, Typography, IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import slugify from '@sindresorhus/slugify'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useParams } from 'react-router-dom'
import stringSimilarity from 'string-similarity'
import Marker1 from './assets/pin (1).png'
import { PlaceData } from './model/models'
import ReactDOMServer from 'react-dom/server'

interface ApiResponse {
	items: PlaceData[]
}

const removeDuplicates = (array: PlaceData[]): PlaceData[] => {
	return array.filter(
		(item, index, self) =>
			index ===
			self.findIndex(
				t => stringSimilarity.compareTwoStrings(slugify(t.title), slugify(item.title)) >= 0.4,
			),
	)
}

const api = 'l3X3aMFHj6CBqM97uul8SNcYiwOhwBqmgWJUIsTmAVI'

const customMarkerIcon2x = 'https://i.ibb.co/L5QYtj1/big-Location-Icon.png'

const customIcon = L.icon({
	iconRetinaUrl: Marker1,
	iconSize: [30, 30],
	iconUrl: customMarkerIcon2x,
})

export const Category = () => {
	const [places, setPlaces] = useState<PlaceData[]>([])
    const [searchValue, setSearchValue] = useState('');
	const { categoryName } = useParams<{ categoryName?: string }>()
	const mapRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const map = L.map(mapRef.current!, {
			center: [49.0119, 24.3731],
			zoom: 12,
		})

		const hereTileUrl = `https://{s}.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=${api}&ppi=320`
		const hereTiles = L.tileLayer(hereTileUrl, {
			subdomains: '1234',
		})

		hereTiles.addTo(map)

		async function fetchPlaces() {
			const response = await fetch(
				`https://discover.search.hereapi.com/v1/discover?at=49.0119,24.3731&q=${categoryName}&apiKey=${api}`,
			)
			const { items } = (await response.json()) as ApiResponse

			const uniqueItems = removeDuplicates(items)

            const filteredItems = uniqueItems.filter(({title}) => {
                const normalizedFilter = searchValue.toLowerCase();
                return title.toLowerCase().includes(normalizedFilter)
            })

			setPlaces(filteredItems)

			filteredItems.forEach((item: PlaceData) => {
				const popupContent = ReactDOMServer.renderToString(
					<Paper elevation={3} style={{ borderRadius: '4px', padding: '8px' }}>
						<Typography component="strong" variant="subtitle1">
							{item.title}
						</Typography>
						<Typography variant="body2">{item.address.label}</Typography>
						<Typography variant="body2">Distance: {item.distance}m</Typography>
					</Paper>,
				)

				const marker = L.marker([item.position.lat, item.position.lng], {
					icon: customIcon,
				}).addTo(map)
				marker.bindPopup(popupContent)
			})
		}

		fetchPlaces().catch(error => console.error(error))

		map.locate({ maxZoom: 16, setView: true })
		map.on('locationfound', function (e) {
			const radius = e.accuracy / 1
			L.circle(e.latlng, radius).addTo(map).bindPopup('You are here').openPopup()
		})

		return () => {
			map.off('locationfound')
			map.remove()
		}
	}, [categoryName || '', searchValue])

	return (
		<Box
			sx={{
				backgroundColor: '#f0f0f0',
				borderRadius: '10px',
				display: 'flex',
				height: '90vh',
				margin: '0 auto',
				padding: '25px',
			}}
		>
			<Box
				sx={{
					borderColor: 'divider',
					overflowY: 'auto',
					width: '30%',
				}}
			>
				<Typography
					component="div"
					sx={{
						backgroundColor: 'primary.main',
						borderRadius: '10px 10px 0 0',
						color: 'primary.contrastText',
						fontWeight: 'bold',
						p: 2,
						position: 'sticky',
						top: 0,
						zIndex: 1100,
					}}
					variant="h6"
				>
					{(categoryName ? categoryName.toUpperCase() : '') + ' Near You'}
				</Typography>
                <Box sx={{ p: "15px 0" }}>
                <Paper
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="I'm looking for..."
                        inputProps={{ 'aria-label': 'search store' }}
                        value={searchValue}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setSearchValue(evt.target.value)}
                    />
                    <IconButton
                        type="submit"
                        sx={{ p: '10px' }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
				<List
					sx={{ backgroundColor: '#fff', borderRadius: '10px' }}
					component="nav"
					aria-label="mailbox folders"
				>
					{places.map((place, index) => (
						<React.Fragment key={place.id}>
							<ListItem>
								<ListItemText
									primary={place.title}
									secondary={place.distance + 'm' + ' ' + 'away'}
								/>
							</ListItem>
							{index < places.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</List>
			</Box>
			<Box
				ref={mapRef}
				sx={{
					zIndex: 0,
					borderRadius: '10px',
					flexGrow: 1,
					height: '100%',
					marginLeft: '10px',
					width: '70%',
				}}
			></Box>
		</Box>
	)
}
