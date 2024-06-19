import React from "react";
import styles from "../styles/FeaturesListItem.module.css";
import UserPostDetail from "../reuseable-components/UserPostDetail";
import Avatar from "../reuseable-components/Avatar";

import { timeSince } from "../../data/utils/utill-functions/time";
import ArticleStats from "../reuseable-components/ArticleStats";

const FeaturesListItem = ({ article, users }) => {
  const { title, author, created_at, votes, article_img_url } = article;
  const backgroundImage = {
    backgroundImage: `url(${article_img_url})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  };

  const userAvatar = users.map((user) => {
    if (user.username === author) {
      return user.avatar_url;
    }
  });
  console.log(userAvatar);

  const timeDetail = timeSince(created_at);

  const reducedTitle = title.split(" ").slice(0, 4).join(" ");

  return (
    <div className={styles.featuresCard} style={backgroundImage}>
      <div className={styles.overlay}></div>
      <h3 className={styles.title}>{reducedTitle}...</h3>
      <div className={styles.articleInfo}>
        {userAvatar && (
          <Avatar
            userAvatar={userAvatar}
            width={20}
            height={20}
            border=" 1px solid white"
            marginLeft={0.8}
          />
        )}
        <div className={styles.detailsContainer}>
          <UserPostDetail
            userName={author}
            time={timeDetail}
            color="white"
            fontWeight="500"
            fontSize="0.44rem"
            marginLeft="0.4rem"
            marginBottom="0.25rem"
            marginTop="0rem"
          />

          <ArticleStats
            votes={votes}
            fontSize={9}
            numFontSize={9}
            heartMarginLeft={0.5}
            commentMarginLeft={0.6}
            numMarginLeft={0.25}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesListItem;
