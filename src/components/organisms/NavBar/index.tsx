import { Stack, styled } from '@mui/material';
import React from 'react';
import logo from '../../../../public/assests/image/logo.png';
import Typography from 'components/atoms/Typography';
import { navBarData } from 'utils';
import { useNavigate } from 'react-router-dom';

const StyledLogo = styled(Stack)({
  width: '50%',
  height: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft: '5rem',
});

const StyledFooter = styled(Stack)({
  width: '50%',
  height: '100%',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginRight: '5rem',
});

const MainBox = styled(Stack)({
  width: '100%',
  height: '10vh',
  justifyContent: 'space-between',
});

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <MainBox direction={'row'}>
      <StyledLogo direction={'row'} spacing={'2rem'}>
        <img
          src={logo}
          alt="logo"
          style={{
            height: '100%',
          }}
        />
        <Typography variant="h4">{navBarData.bookHub}</Typography>
      </StyledLogo>
      <StyledFooter direction={'row'} spacing={'2rem'}>
        <Typography
          variant="h6"
          style={{ cursor: 'pointer' }}
          onClick={() => {}}
        >
          {navBarData.home}
        </Typography>
        <Typography
          variant="h6"
          style={{ cursor: 'pointer' }}
          onClick={() => {}}
        >
          {navBarData.about}
        </Typography>
      </StyledFooter>
    </MainBox>
  );
};

export default NavBar;
