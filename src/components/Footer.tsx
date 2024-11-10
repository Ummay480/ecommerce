import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Stay Connected Section */}
        <div className={styles.section}>
          <h3>Stay Connected</h3>
          <p>Address: Istanbul, Turkey</p>
          <p>Phone: (+90) 985 98 75</p>
          <h3>Follow us on social media</h3>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagarm.png" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className={styles.section}>
          <h3>Mansoury.</h3>
          <ul>
            <li><a href="/about">Abour Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/collaboration">Collaboration</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/policies">Policies</a></li>
          </ul>
        </div>
        
        {/* Customer Services Section */}
        <div className={styles.section}>
          <h3>Customer Services</h3>
          <ul>
            <li><a href="/help-center">Rules and Regulations</a></li>
            <li><a href="/track-order">Terms of Use</a></li>
            <li><a href="/returns">Return Procedure</a></li>
            <li><a href="/shipping">Privacy Policy</a></li>
            <li><a href="/faq">Forums</a></li>
          </ul>
        </div>
       
        <div className={styles.section}>
          <h3>Quick Acces</h3>
          <ul>
            <li><a href="/help-center">Contact Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/returns">Return Procedure</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; 2024-25 Ummay Kulsoom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
