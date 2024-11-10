"use client";

import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <img src="/images/product-image(1).png" alt="Product" className={styles.image} />
      <h3 className={styles.name}>Product Name</h3>
      <p className={styles.price}>$99.99</p>
    </div>
  );
};

export default ProductCard;
