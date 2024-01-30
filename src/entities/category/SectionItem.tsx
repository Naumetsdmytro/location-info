import { Grid, Paper, Typography, Box } from '@mui/material'
import React from 'react'

interface Props {
  text: string
  icon: React.ReactNode
}

export const SectionItem = ({ text, icon }: Props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 150,
          backgroundColor: '#9c27b0',
          color: '#fff',
        }}
      >
        {icon}
        <Typography variant="subtitle1">{text}</Typography>
      </Paper>
    </Grid>

  )
}