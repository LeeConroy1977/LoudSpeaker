import React from "react";
import styles from "../styles/FeaturesSection.module.css";
import FeaturesList from "./FeaturesList";

const FeaturesSection = ({ articles, users }) => {
  return (
    <div className={styles.featuresSection}>
      <FeaturesList articles={articles} users={users} />
    </div>
  );
};

export default FeaturesSection;
