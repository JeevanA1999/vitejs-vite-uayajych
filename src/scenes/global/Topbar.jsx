import { useState, useContext } from 'react';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import {
  LightModeOutlined as LightIcon,
  DarkModeOutlined as DarkIcon,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search as SearchIcon,
} from '@mui/icons-material';
import { ColorModeContext, tokens } from '../../theme';
import LogoutDialog from '../logout'; // Path to your dialog

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkIcon /> : <LightIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton onClick={() => setLogoutOpen(true)}>
          <PersonOutlined />
        </IconButton>
      </Box>

      {/* Logout Dialog */}
      <LogoutDialog
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={() => {
          localStorage.removeItem('accessToken');
          window.location.href = '/login';
        }}
      />
    </Box>
  );
};

export default Topbar;
