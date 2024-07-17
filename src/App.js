import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
function App() {
  const images = [
    '/assets/bg01.jpg',
    '/assets/bg02.jpg',
    '/assets/bg03.jpg',
    '/assets/bg04.jpg',
    '/assets/bg05.jpg',
  ];
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  // Pre-load the images
  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
      });
    };
    Promise.all(images.map((src) => loadImage(src)))
      .then((loaded) => {
        setLoadedImages(loaded);
      })
      .catch((err) => console.error('Failed to load images', err));
  }, [images]);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);
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
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {loadedImages.map((img, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transition: 'opacity 1s ease-in-out',
            opacity: index === bgImageIndex ? 1 : 0,
          }}
        />
      ))}
      <Container
        maxWidth="sm"
        style={{
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          position: 'relative',
          zIndex: 1,
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