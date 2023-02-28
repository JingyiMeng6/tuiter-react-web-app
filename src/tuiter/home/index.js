import React from "react";
import PostItem from "./post-item";
import posts from './posts.json'

const HomeComponent = () => {
  return(
      <>
        <ul className={"list-group"}>
          {posts.map(post => <PostItem key={post.id} post={post}/> )}
          {/*{posts.map(post => (`${PostItem(post)}`)).join('')}*/}
        </ul>
      </>
  );
};

export default HomeComponent;