import React from 'react';
import bgImage from '../../../../assets/images/bg.jpg';
import logo from '../../../../assets/images/bb_logo.png';
import { alpha, styled, Typography } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  backgroundImage: [
    `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.5)} -150%, ${
      theme.palette.background.default
    })`,
    `url(${bgImage})`,
  ].join(', '),
  backgroundSize: 'cover',
  backgroundPosition: 'center left',
  width: '100%',
  minHeight: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(5, '10vw'),
  [theme.breakpoints.up('md')]: {
    backgroundImage: [
      `linear-gradient(90deg, ${alpha(theme.palette.background.default, 0.25)}, ${
        theme.palette.background.default
      })`,
      `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.25)}, ${
        theme.palette.background.default
      })`,
      `url(${bgImage})`,
    ].join(', '),
    minHeight: '70vh',
    justifyContent: 'flex-end',
  },
}));

const Title = styled('div')(({ theme }) => ({
  textAlign: 'center',
  '& img': {
    maxWidth: 200,
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '30%',
    '& img': {
      maxWidth: '100%',
    },
  },
}));

const Header = () => {
  return (
    <Root>
      <Title>
        <img src={logo} alt="Breaking Bad" />
        <Typography variant="h2" component="h1">
          Characters
        </Typography>
      </Title>
    </Root>
  );
};

export default Header;
