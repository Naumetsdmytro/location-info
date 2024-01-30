import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useSpring, animated } from 'react-spring'

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
    navigate(`/main/${input}`)
  }

  const springProps = useSpring({
    width: isClicked ? '100vh' : '60vh',
    config: {
      tension: 210,
      friction: 20,
    },
  })

  return (
    <animated.div style={{ ...springProps, transformOrigin: 'center' }}>
      <TextField
        fullWidth
        value={input}
        onChange={handleChange}
        onClick={handleClick}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          color: 'black',
          borderColor: 'black',
        }}
        placeholder="stores, restaurants, cafes, etc."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onSubmit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </animated.div>
  )
}