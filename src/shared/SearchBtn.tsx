import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'

export const SearchBtn = () => {
	const [input, setInput] = useState('')
	const [isClicked, setIsClicked] = useState(false)
	const navigate = useNavigate()

	const handleClick = () => {
		setIsClicked(true)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value)
	}

	const onSubmit = () => {
		navigate(`/search/${input}`)
	}

	const springProps = useSpring({
		config: {
			friction: 20,
			tension: 210,
		},
		width: isClicked ? '100vh' : '60vh',
	})

	return (
		<animated.div style={{ ...springProps, transformOrigin: 'center' }}>
			<TextField
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={onSubmit}>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
				fullWidth
				onChange={handleChange}
				onClick={handleClick}
				placeholder="stores, restaurants, cafes, etc."
				sx={{
					backgroundColor: 'rgba(255, 255, 255, 0.7)',
					borderColor: 'black',
					color: 'black',
				}}
				value={input}
			/>
		</animated.div>
	)
}
