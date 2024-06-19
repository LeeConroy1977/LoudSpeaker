import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";
import styles from "../styles/ArticleStats.module.css";

const ArticleStats = ({
  votes,
  commentCount = 0,
  fontSize,
  numFontSize,
  heartMarginLeft,
  commentMarginLeft,
  numMarginLeft,
}) => {
  const heartIconStyles = {
    fill: "red",
    fontSize: `${fontSize}px`,
    marginLeft: `${heartMarginLeft}rem`,
  };

  const commentIconStyles = {
    color: "white",
    fontSize: `${fontSize}px`,
    marginLeft: `${commentMarginLeft}rem`,
  };
  const numStyles = {
    color: "white",
    fontSize: `${numFontSize}px`,
    marginLeft: `${numMarginLeft}rem`,
  };
  const articleStats = {};
  return (
    <div className={styles.articleStats} style={articleStats}>
      <FaHeart style={heartIconStyles} />
      <p style={numStyles}>{votes}</p>
      <FaRegCommentAlt style={commentIconStyles} />
      <p style={numStyles}>{commentCount}</p>
    </div>
  );
};

export default ArticleStats;
