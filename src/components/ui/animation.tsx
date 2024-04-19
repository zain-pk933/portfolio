// components/ButtonAnimation.js
'use client'
import { Button } from "@/components/ui/button";import React, { useEffect } from 'react';
import styles from './ButtonAnimation.module.css';

const ButtonAnimation = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.animated-button');

    const animateButtons = () => {
      buttons.forEach((button) => {
        button.classList.toggle(styles.moveUp);
      });
    };

    const buttonAnimationInterval = setInterval(animateButtons, 5000); // Repeat every 5 seconds

    // Clean up interval when component unmounts
    return () => clearInterval(buttonAnimationInterval);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className={styles.container}>
      <button className={`animated-button ${styles.button}`} aria-label="Facebook">
        <img src="facebook.png" alt="Facebook"></img>
      </button>
      <button className={`animated-button ${styles.button}`} aria-label="Instagram">
        <img src="instagram.png" alt="Instagram"></img>
      </button>
      <button className={`animated-button ${styles.button}`} aria-label="Twitter">
        <img src="twitter.png" alt="Twitter"></img>
      </button>
      <button className={`animated-button ${styles.button}`} aria-label="WhatsApp">
        <img src="whatsapp.png" alt="WhatsApp"></img>
      </button>
    </div>
  );
};

export default ButtonAnimation;