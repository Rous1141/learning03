import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google'; // This should be the correct import for the Google icon

export default function LoginForm() {
  return (
    <Stack component="form" spacing={2} noValidate>
      <TextField
        required
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        fullWidth
      />
      <TextField
        required
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        fullWidth
      />
      <Button variant="contained" fullWidth>
        Login
      </Button>
      <Button 
        variant="contained" 
        startIcon={<GoogleIcon />} 
        fullWidth
        style={{ backgroundColor: '#DB4437', color: 'white' }}
      >
        Login with Google
      </Button>
      <Button variant="outlined" fullWidth>
        Register Account
      </Button>
    </Stack>
  );
}