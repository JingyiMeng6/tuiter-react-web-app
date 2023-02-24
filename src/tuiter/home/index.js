import React from "react";
import PostItem from "./post-item";
import posts from './posts.json'

const HomeComponent = () => {
  return(
      <>
        <ul className={"list-group"}>
          {posts.map(post => <PostItem post={post}/> )}
        </ul>
      </>
  );
};

export default HomeComponent;