import React from "react";
import styles from "../styles/AppLayout.module.css";
import NavBar from "./NavBar";
import CategorySection from "./CategorySection";
import Main from "./Main";
import FeaturesSection from "./FeaturesSection";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <NavBar />
      <CategorySection />
      <Main>{children}</Main>
      <FeaturesSection />
    </div>
  );
};

export default AppLayout;
