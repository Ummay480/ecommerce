"use client";
import React from "react";
import styles from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  title: string;
};

const ProductGrid: React.FC<ProductGridProps> = ({ title }) => {
  return (
    <section className={styles.gridSection}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
    </section>
  );
};

export default ProductGrid;
