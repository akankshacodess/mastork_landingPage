"use client"
import { useState } from 'react';
import styles from './Clients.module.css';

export default function Clients() {
  const [index, setIndex] = useState(0);

  const reviews = [
    { name: "Company 1", designation: "CEO", logo: "/logo1.png", review: "Great Service!" },
    { name: "Company 2", designation: "Manager", logo: "/logo2.png", review: "Very helpful." },
    { name: "Company 3", designation: "CTO", logo: "/logo3.png", review: "Fantastic!" }
  ];

  const nextReview = () => setIndex((index + 1) % reviews.length);
  const prevReview = () => setIndex((index - 1 + reviews.length) % reviews.length);

  return (
    <section id="clients" className={styles.section}>
      <h2>What Our Clients Say</h2>
      <div className={styles.carousel}>
        <button onClick={prevReview}>←</button>
        <div className={styles.reviewBox}>
          <p><strong>{reviews[index].name}</strong> ({reviews[index].designation})</p>
          <img src={reviews[index].logo} alt="logo" />
          <p>{reviews[index].review}</p>
        </div>
        <button onClick={nextReview}>→</button>
      </div>
      <a href="#contact" className={styles.btn}>Book a Free Consultation</a>
    </section>
  );
}
