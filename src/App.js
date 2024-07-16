

import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';

function App() {
  const [bgImage, setBgImage] = useState('/assets/pexels-goumbik-616401.jpg');
  const images = [
    '/assets/bg01.jpg',
    '/assets/bg02.jpg',
    '/assets/bg03.jpg',
    '/assets/bg04.jpg',
    '/assets/bg05.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

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
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-image 1s ease-in-out', // Smooth transition for background change
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
        </Box>
        <div
          className="launchlist-widget"
          data-key-id="ocdNxw"
          data-height="180px"
          style={{ marginTop: '20px' }}
        ></div>
      </Container>
    </div>
  );
}

export default App;

