import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function App() {
  return (
    <div
      style={{
        backgroundImage: 'url(/assets/pexels-goumbik-616401.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        style={{
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <img src="/assets/logo.png" alt="Logo" style={{ width: '150px', marginBottom: '20px' }} />
        {/* <Typography variant="h2" gutterBottom>
          Welcome to Our Website!
        </Typography> */}
        <Typography variant="h5" gutterBottom>
          Register your interest by providing your email below:
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { marginBottom: '16px' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            required
          />
          <Button variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
