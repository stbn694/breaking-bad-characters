import React, { MouseEventHandler } from 'react';
import PublicIcon from '@mui/icons-material/Public';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { resources } from '../../i18n';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const open = !!anchorEl;

  const handleOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: string) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label={t('changeLang')}
        size="large"
        onClick={handleOpen}
        sx={{ m: 3, position: 'fixed', top: 0, right: 0 }}
        aria-controls={open ? 'lang-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        id="lang-button"
      >
        <PublicIcon fontSize="inherit" />
      </IconButton>

      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lang-button',
        }}
      >
        {Object.keys(resources)
          .filter((lang) => lang !== i18n.language)
          .map((lang) => (
            <MenuItem key={lang} onClick={() => handleClose(lang)}>
              {t('langName', { lng: lang })}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
