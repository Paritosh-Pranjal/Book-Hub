import React from 'react';
import library from '../../../../public/assests/image/library-img.jpg';
import about from '../../../../public/assests/image/about-img.jpg';
import { Box, styled } from '@mui/material';
import Typography from 'components/atoms/Typography';
import { aboutImageData } from 'utils';

const StyledImageTypo = styled(Typography)({
  position: 'absolute',
  maxWidth: '30vw',
  fontWeight: 900,
  color: 'white',
});

const StyledImageBox = styled(Box)({
  backgroundImage: `url(${library})`,
  width: '100%',
  minHeight: '75vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'start',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '99%',
    minHeight: '75vh',
    backgroundColor: '#79096f',
    opacity: 0.5,
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2rem',
});

const StyledAboutImage = styled(Box)({
  backgroundImage: `url(${about})`,
  width: '100%',
  minHeight: '50vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'start',
});

const StyledAboutBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '2rem',
  width: '100%',
});

const AboutImage = () => {
  return (
    <div>
      <StyledImageBox>
        <StyledImageTypo variant="h6">
          <i>{aboutImageData.hookLine}</i>
        </StyledImageTypo>
      </StyledImageBox>
      <StyledAboutBox>
        <StyledAboutImage />
        <Typography
          variant="h6"
          style={{
            maxWidth: '30vw',
            marginLeft: '15rem',
          }}
        >
          {aboutImageData.about}
        </Typography>
      </StyledAboutBox>
    </div>
  );
};

export default AboutImage;
