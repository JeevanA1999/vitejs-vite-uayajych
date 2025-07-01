import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('accessToken', 'dummyToken123');
      navigate('/');
    } else {
      setError('Invalid credentials. Try admin@example.com / admin123');
    }
  };

  return (
    <Box
      display="flex"
      width="100vw"
      bgcolor={colors.primary[500]}
      color="white"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper elevation={4} sx={{ padding: 4, width: 360 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={email}
            placeholder='admin@example.com'
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              sx: { color: '#fff' }, // White label
            }}
            InputProps={{
              sx: { color: '#fff' }, // White input text
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            placeholder='admin123'
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              sx: { color: '#fff' }, // White label
            }}
            InputProps={{
              sx: { color: '#fff' }, // White input text
            }}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
