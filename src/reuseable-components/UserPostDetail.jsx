import React from "react";

const UserPostDetail = ({
  userName,
  time,
  fontSize,
  fontWeight,
  color,
  marginLeft,
  marginBottom,
  marginTop,
}) => {
  const postDetailStyles = {
    fontSize: `${fontSize}`,
    fontWeight: `${fontWeight}`,
    color: `${color}`,
    marginLeft: `${marginLeft}`,
    marginBottom: `${marginBottom}`,
    marginTop: `${marginTop}`,
  };
  return (
    <p style={postDetailStyles}>
      {userName} . {time}
    </p>
  );
};

export default UserPostDetail;
