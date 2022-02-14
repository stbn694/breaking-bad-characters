import React from 'react';
import bgImage from '../../../../assets/images/bg.jpg';
import logo from '../../../../assets/images/bb_logo.png';
import { alpha, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion, Variants } from 'framer-motion';

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

const Title = styled(motion.div)(({ theme }) => ({
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

const titleAnimation: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Header = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <Title initial='hidden' animate='visible' variants={titleAnimation}>
        <img src={logo} alt={t('breakingBad')} />
        <Typography variant='h2' component='h1'>
          {t('characterList.characters')}
        </Typography>
      </Title>
    </Root>
  );
};

export default Header;
