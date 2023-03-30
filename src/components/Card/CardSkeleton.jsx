import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.css";

export default function CardSkeleton() {
  return (
    <div className={styles.card}>
      <ContentLoader viewBox="0 0 155 265" height={250} width={155}>
        <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
        <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
        <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
        <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
      </ContentLoader>
    </div>
  );
}
