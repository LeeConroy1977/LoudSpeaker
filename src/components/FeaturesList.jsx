import React from "react";
import styles from "../styles/FeaturesList.module.css";
import FeaturesListItem from "./FeaturesListItem";

const FeaturesList = ({ articles, users }) => {
  console.log(users);
  return (
    <div className={styles.featuresList}>
      <div className={styles.sectionTitleContainer}>
        <h2 className={styles.sectionTitle}>Featured Articles</h2>
      </div>
      {articles &&
        users &&
        articles.map((article) => {
          // change key to title
          return (
            <FeaturesListItem
              key={article.title}
              article={article}
              users={users}
            />
          );
        })}
    </div>
  );
};

export default FeaturesList;
