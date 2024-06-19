import React from "react";
import styles from "../styles/AppLayout.module.css";
import NavBar from "./NavBar";
import CategorySection from "./CategorySection";
import Main from "./Main";
import FeaturesSection from "./FeaturesSection";
import articles from "../../data/articles";
import users from "../../data/users";

const AppLayout = ({ children }) => {
  const featuredArticles = articles.filter((article) => article.featured);
  console.log(users);

  return (
    <div className={styles.appLayout}>
      <NavBar />
      <CategorySection />
      <Main>{children}</Main>
      <FeaturesSection articles={featuredArticles} users={users} />
    </div>
  );
};

export default AppLayout;
