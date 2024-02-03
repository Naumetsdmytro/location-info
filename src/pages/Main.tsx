import { Box, Typography, Stack, Grid } from '@mui/material'
import mainImage from './assets/main.jpg'
import { SearchBtn } from '../shared'
import { SectionList } from '../entities/category'
import { Footer } from '../shared'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { Feedback } from '../shared'
import { useTheme } from '../shared/hooks/useTheme'

export const Main = () => {
  const { isDark } = useTheme()

  const [footerRef, inFooterView] = useInView({
    triggerOnce: true,
  })
  
  const [sectionRef, inSectionView] = useInView({
    triggerOnce: true,
  })

  const footerFadeProps = useSpring({
    opacity: inFooterView ? 1 : 0,
    transform: inFooterView ? 'translateY(0)' : 'translateY(50px)',
    config: {
      duration: 1000,
    },
  })

  const sectionFadeProps = useSpring({
    opacity: inSectionView ? 1 : 0,
    transform: inSectionView ? 'translateY(0)' : 'translateY(50px)',
    config: {
      duration: 1000,
    },
  })

  return (
    <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: isDark ? '#000000' : '#ffffff' }}>
      <img
        src={mainImage}
        alt="main-page"
        width="100%"
        height="50%"
      />
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Stack component={'div'} spacing={2} sx={{
          border: '2px solid #4d4d4d',
          backgroundColor: isDark ? 'rgba(150, 150, 150, 0.4)' : 'rgba(255, 255, 255, 0.4)',
          borderRadius: '10px',
          padding: '10px',
          marginBottom: '20px',
        }}>
          <Typography variant={'h2'} sx={{ color: isDark ? 'rgba(1, 1, 1, 0.7)' : 'rgba(255, 255, 255, 0.7)' }}>
            <span style={{ color: '#5a67d8' }}>Search</span> any place near you
          </Typography>
        </Stack>
        <Typography variant={'h3'} sx={{ color: isDark ? 'rgba(0, 100, 0)' : 'rgba(255, 255, 255)' , marginBottom: '10px' }}>
          Find the best <span style={{ color: '#023e8a' }}>places</span> in your city
        </Typography>
        <Stack component={'div'} spacing={2}>
          <SearchBtn />
        </Stack>
      </Grid>
      <animated.div ref={sectionRef} style={sectionFadeProps}>
        <SectionList />
      </animated.div>
      <Feedback />
      <animated.div ref={footerRef} style={footerFadeProps}>
        <Footer />
      </animated.div>
    </Box>
  )
}
