import React, { useEffect } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function App() {
  // Function to dynamically load the external script
  const loadScript = (src) => {
    // Check if the script is already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Failed to load script ${src}`));
      document.body.appendChild(script);
    });
  };

  // Use useEffect to load the script when the component mounts
  useEffect(() => {
    loadScript('https://getlaunchlist.com/js/widget.js')
      .then(() => {
        console.log('External script loaded');
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
          {/* Adding the Launchlist Widget */}
          <div
            className="launchlist-widget"
            data-key-id="ocdNxw"
            data-height="180px"
            style={{ marginTop: '20px' }}
          ></div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
