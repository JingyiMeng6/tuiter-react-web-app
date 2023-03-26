import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";



const HomeComponent = () => {
  const posts = useSelector(state => state.tuits)
  return(
      <>
        <h4>Home</h4>
        <WhatsHappening/>
        <ul className={"list-group"}>
          {posts.map(post => <TuitItem key={post._id} post={post}/> )}
          {/*{posts.map(post => (`${PostItem(post)}`)).join('')}*/}
        </ul>
      </>
  );
};

export default HomeComponent;