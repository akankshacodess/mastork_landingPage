"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS
import { useEffect } from 'react';
import '@/styles/globals.css'; // Your global styles or Tailwind CSS

function MyApp({ Components, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true,     // Animation only happens once
    });
  }, []);

  return <Components {...pageProps} />;
}

export default MyApp;
