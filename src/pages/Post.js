import React from "react";
import BigText from "../components/BigText";

const Post = ({ match }) => {
  return (
    <div>
      <BigText>
        Post
        {match.params.name}
      </BigText>
    </div>
  );
};

export default Post;
