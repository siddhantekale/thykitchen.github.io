import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import './SecondApp.css';

function SecondApp() {
  return (
    <div
      style={{
        backgroundImage: 'url(/assets/background.jpg)', // Ensure this path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '30px',
          borderRadius: '15px',
          flexGrow: 1, // Adjusted flex-grow for the first row
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center', // Center text content
        }}
      >
        <Typography variant="h3" gutterBottom>
          JettPay
        </Typography>
        <Typography variant="h6" gutterBottom style={{ maxWidth: '80%', margin: 'auto' }}>
          Enjoy hassle-free payments in India using your existing U.S or U.K Credit or Debit Card!
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& .MuiTextField-root': { marginBottom: '16px', width: '80%' }, // Increase email box length
            marginTop: '20px'
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
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Register your interest
          </Button>
        </Box>
      </Container>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '30px',
          borderRadius: '15px',
          flexGrow: 3, // Adjusted flex-grow for the second row
          marginTop: '20px', // Margin to separate from the first row
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={3} style={{ height: '100%' }}>
          <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">
              Quick and Easy setup: Start paying immediately through paperless setup
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">
              Earn reward points while you pay
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">
              Accepted at all local markets and major retailers
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SecondApp;
