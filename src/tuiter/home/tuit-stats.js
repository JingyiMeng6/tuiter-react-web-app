import React, {useState} from "react";
import {createTuit} from "../tuits/tuits-reducer";

const TuitStats = (
    {tuitStats = {
      liked: true,
      replies: 34,
      retuits: 34,
      likes: 34,
    }}
) => {
  let [liked, setLiked] = useState(tuitStats.liked);
  let [likes, setLikes] = useState(tuitStats.likes);
  const likeClickHandler = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  }

  return(
      <div className="row ">
        <div className="col text-muted text-center">
          <i className="bi bi-chat"></i> {tuitStats.replies}</div>
        <div className="col text-muted text-center">
          <i className="bi bi-arrow-repeat"></i> {tuitStats.retuits}</div>
        <div className="col text-muted text-center" onClick={likeClickHandler}>
          <i className={"bi " + (liked ? 'bi-heart-fill text-danger' : 'bi-heart')}></i> {likes}</div>
        <div className="col text-muted text-center">
          <i className="bi bi-box-arrow-up"></i></div>
      </div>
  )
}


export default TuitStats;