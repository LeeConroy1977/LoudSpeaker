import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ userAvatar, width, height, border, marginLeft }) => {
  const imageStyles = {
    width: `${width}px`,
    height: `${height}px`,
    border: `${border}`,
    marginLeft: `${marginLeft}rem`,
  };
  return (
    <img
      src={userAvatar}
      className={styles.avatar}
      style={imageStyles}
      alt=""
    />
  );
};

export default Avatar;
